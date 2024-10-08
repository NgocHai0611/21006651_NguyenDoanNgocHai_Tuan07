import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, Image, Modal, Pressable, Alert, ScrollView } from 'react-native';
import axios from 'axios';
import { useRoute, useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

function NoteList() {
    const [notes, setNotes] = useState([]);
    const [search, setSearch] = useState('');
    const [searchFocused, setSearchFocused] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [editModalVisible, setEditModalVisible] = useState(false);
    const [noteToDelete, setNoteToDelete] = useState(null);
    const [noteToEdit, setNoteToEdit] = useState(null);
    const [editedContent, setEditedContent] = useState('');
    const route = useRoute();
    const navigation = useNavigation();

    const userName = route.params?.userName || 'Unknown User';
    const newNote = route.params?.newNote; 

    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const response = await axios.get('http://localhost:5000/notes');
                setNotes(response.data);
            } catch (error) {
                console.error(error);
                Alert.alert('Error', 'Failed to fetch notes.');
            }
        };

        fetchNotes();
    }, []);

    useEffect(() => {
        if (newNote) {
            setNotes(prevNotes => [...prevNotes, newNote]); 
        }
    }, [newNote]);

    const filteredNotes = notes.filter(note =>
        note.content.toLowerCase().includes(search.toLowerCase())
    );

    const confirmDelete = (id) => {
        setNoteToDelete(id);
        setModalVisible(true);
    };

    const handleDelete = async () => {
        if (noteToDelete) {
            try {
                await axios.delete(`http://localhost:5000/notes/${noteToDelete}`);
                setNotes(prevNotes => prevNotes.filter(note => note.id !== noteToDelete));
                setNoteToDelete(null);
            } catch (error) {
                console.error(error);
                Alert.alert('Error', 'Failed to delete the note.');
            }
        }
        setModalVisible(false);
    };

    const confirmEdit = (note) => {
        setNoteToEdit(note);
        setEditedContent(note.content);
        setEditModalVisible(true);
    };

    const handleEdit = async () => {
        if (noteToEdit) {
            try {
                // Construct the updated note with id before content
                const updatedNote = { id: noteToEdit.id, content: editedContent };
                
                await axios.put(`http://localhost:5000/notes/${noteToEdit.id}`, updatedNote);
                setNotes(prevNotes =>
                    prevNotes.map(note =>
                        note.id === noteToEdit.id ? updatedNote : note
                    )
                );
                Alert.alert('Cập nhật note thành công');
                setNoteToEdit(null);
            } catch (error) {
                console.error(error);
                Alert.alert('Failed to update the note.');
            }
        }
        setEditModalVisible(false);
    };
    

    return (
        <View style={styles.container}>
            <ScrollView style={{ width: "100%", height: 500 }}>
                <View style={styles.header}>
                    <Image source={require('../assets/ava1.png')} style={styles.profilePic} />
                    <Text style={styles.greeting}>Hi {userName}</Text>
                    <Text style={styles.subGreeting}>Have a great day ahead!</Text>
                </View>

                {/* <TextInput
                    placeholder="Search"
                    value={search}
                    onChangeText={setSearch}
                    style={styles.searchBar}
                /> */}
                <View style={[styles.inputContainer, searchFocused && styles.inputContainerFocused]}>
                    <FontAwesome name="search" size={20} style={styles.searchIcon} />
                    <TextInput
                        placeholder="Search"
                        placeholderTextColor="#aaa"
                        value={search}
                        onFocus={() => setSearchFocused(true)}
                        onBlur={() => setSearchFocused(false)}
                        onChangeText={setSearch}
                        style={styles.searchBar}
                    />
                </View>

                <FlatList
                    data={filteredNotes}
                    keyExtractor={item => item.id.toString()}
                    contentContainerStyle={{ paddingBottom: 30 }}
                    renderItem={({ item }) => (
                        <View style={styles.noteItem}>
                            <View style={styles.noteContent}>
                                <Image source={require('../assets/checkicon.png')} style={styles.checkmark} />
                                <TouchableOpacity style={{ flex: 1 }}>
                                    <Text style={styles.noteText}>{item.content}</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity onPress={() => confirmEdit(item)}>
                                <Text style={styles.editIcon}>✏️</Text> {/* Bút chì chỉnh sửa */}
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => confirmDelete(item.id)}>
                                <Text style={styles.deleteIcon}>❌</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </ScrollView>

            <TouchableOpacity
                style={styles.addButton}
                onPress={() => navigation.navigate('AddUpdateNote', { userName })}
            >
                <Text style={styles.plusSign}>+</Text>
            </TouchableOpacity>

            {/* Modal xóa */}
            {/* (Phần modal không thay đổi) */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Bạn có chắc chắn muốn xóa ghi chú này?</Text>
                    <View style={styles.buttonContainer}>
                        <Pressable
                            style={[styles.button, styles.buttonCancel]}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={styles.textStyle}>Hủy</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.button, styles.buttonOK]}
                            onPress={handleDelete}
                        >
                            <Text style={styles.textStyle}>OK</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>

            {/* Modal chỉnh sửa */}
            {/* (Phần modal không thay đổi) */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={editModalVisible}
                onRequestClose={() => setEditModalVisible(false)}
            >
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Chỉnh sửa ghi chú:</Text>
                    <TextInput
                        value={editedContent}
                        onChangeText={setEditedContent}
                        style={styles.editInput}
                    />
                    <View style={styles.buttonContainer}>
                        <Pressable
                            style={[styles.button, styles.buttonCancel]}
                            onPress={() => setEditModalVisible(false)}
                        >
                            <Text style={styles.textStyle}>Hủy</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.button, styles.buttonOK]}
                            onPress={handleEdit}
                        >
                            <Text style={styles.textStyle}>OK</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    header: {
        alignItems: 'center',
        marginBottom: 20,
    },
    profilePic: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 10,
    },
    greeting: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
    },
    subGreeting: {
        fontSize: 16,
        color: '#666',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 40, 
    },
    inputContainerFocused: {
        borderColor: '#1f1f1f', 
        borderWidth: 1,
    },
    searchIcon: {
        padding: 10, 
        color: '#171A1F',
    },
    searchBar: {
        height: 50,
        flex: 1, 
        paddingHorizontal: 10,
        outlineWidth: 0,
    },
    noteItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(222, 225, 230, 1.0)',
        paddingVertical: 8, 
        paddingHorizontal: 12,
        borderRadius: 24,
        marginBottom: 20,
        shadowColor: 'rgba(23, 26, 31, 0.9)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 4,
    },
    noteContent: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
    },
    noteText: {
        fontSize: 16,
        color: '#333',
        marginLeft: 10,
        flex: 1,
    },
    checkmark: {
        width: 46,
        height: 46,
    },
    deleteIcon: {
        fontSize: 18,
        color: 'red',
    },
    editIcon: {
        fontSize: 18,
        color: 'blue',
        marginLeft: '-40%', 
    },
    addButton: {
        position: 'absolute',
        bottom: 30,
        left: 184,
        backgroundColor: '#00BDD6',
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    plusSign: {
        fontSize: 30,
        color: '#fff',
        alignItems: 'center',
        bottom: 4,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        marginHorizontal: 5,
    },
    buttonOK: {
        backgroundColor: '#2196F3',
    },
    buttonCancel: {
        backgroundColor: 'gray',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    editInput: {
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 15,
        paddingHorizontal: 10,
        width: '100%',
    },
});

export default NoteList;
