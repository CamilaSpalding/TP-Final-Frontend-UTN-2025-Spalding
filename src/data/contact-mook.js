/* import imagen from  */

// Este archivo solo contiene los datos de los contactos, simula ser un servidor.

const mook_data = {
    contacts: [
        {
            id: 1,
            name: 'Cami',
            phone: '+54 9 11 6997-9020',
            profile_pic: '../assets/images/profile-pic.jpg',
            info: 'Hakuna Matata',
            last_time_connected: '20:51',
            groups: [
                {
                    id: 1,
                    name: 'Grupo de diseño',
                    info: 'pindonga',
                    profile_pic: '../assets/images/profile-pic.jpg',
                    messages: [
                        {
                            id: 1,
                            sender: 'YO',
                            text: 'Holis',
                            sent_time: '10:20',
                            sent_date: '16/05/2025',
                            status: 'seen'
                        },
                        {
                            id: 2,
                            sender: 'Mariana',
                            text: 'Como va?',
                            sent_time: '11:15',
                            sent_date: '16/05/2025',
                            status: 'seen'
                        },
                        {
                            id: 3,
                            sender: 'Fabri',
                            text: 'Todo tranqui',
                            sent_time: '11:26',
                            sent_date: '16/05/2025',
                            status: 'received'
                        },
                    ],
                    last_message: {
                        id: 3, 
                        sender: 'Fabri',
                        text: 'Todo tranqui',
                        sent_time: '11:26',
                        sent_date: '16/05/2025',
                        status: 'received'
                    },
                    unread_messages: 1
                },
                {
                    id: 2,
                    name: 'Us',
                    info: 'Spalding Sr.',
                    profile_pic: '../assets/images/profile-pic.jpg',
                    messages: [
                        {
                            id: 1,
                            sender: 'Vero',
                            text: 'Parecemos los locos Adams...',
                            sent_time: '06:30',
                            sent_date: '18/07/2025',
                            status: 'seen'
                        },
                        {
                            id: 2,
                            sender: 'Marcos',
                            text: 'Tenes razón',
                            sent_time: '20:56',
                            sent_date: '18/07/2025',
                            status: 'received'
                        },
                    ],
                    last_message: {
                        id: 0,
                        sender: 'Marcos',
                        text: 'Tenes razón',
                        sent_time: '20:56',
                        sent_date: '18/07/2025',
                        status: 'received'
                    },
                    unread_messages: 0
                }
            ],
            messages: [
                {
                    id: 1,
                    sender: '',
                    text: 'hola 1',
                    sent_time: '',
                    sent_date: '',
                    status: '' 
                },
                {
                    id: 2,
                    sender: '',
                    text: 'hola 1',
                    sent_time: '',
                    sent_date: '',
                    status: '' 
                }
            ],
            last_message: {
                id: 0,
                sender: '',
                text: '',
                sent_time: '',
                sent_date: '',
                status: ''
            },
            unread_messages: 0
        },
        {
            id: 2,
            name: 'Fran',
            phone: '',
            profile_pic: '',
            info: '',
            last_time_connected: '',
            groups: [
                {
                    id: 1,
                    name: '',
                    info: '',
                    profile_pic: '',
                    messages: [
                        {
                            id: 1,
                            sender: '',
                            text: '',
                            sent_time: '',
                            sent_date: '',
                            status: ''
                        },
                        {
                            id: 2,
                            sender: '',
                            text: '',
                            sent_time: '',
                            sent_date: '',
                            status: ''
                        },
                    ],
                    last_message: {
                        id: 0,
                        sender: '',
                        text: '',
                        sent_time: '',
                        sent_date: '',
                        status: ''
                    },
                    unread_messages: 0
                },
                {
                    id: 2,
                    name: '',
                    info: '',
                    profile_pic: '',
                    messages: [
                        {
                            id: 1,
                            sender: '',
                            text: '',
                            sent_time: '',
                            sent_date: '',
                            status: ''
                        },
                        {
                            id: 2,
                            sender: '',
                            text: '',
                            sent_time: '',
                            sent_date: '',
                            status: ''
                        },
                    ],
                    last_message: {
                        id: 0,
                        sender: '',
                        text: '',
                        sent_time: '',
                        sent_date: '',
                        status: ''
                    },
                    unread_messages: 0
                }
            ],
            messages: [
                {
                    id: 1,
                    sender: '',
                    text: 'hola 1',
                    sent_time: '',
                    sent_date: '',
                    status: '' 
                },
                {
                    id: 2,
                    sender: '',
                    text: 'hola 1',
                    sent_time: '',
                    sent_date: '',
                    status: '' 
                }
            ],
            last_message: {
                id: 0,
                sender: '',
                text: '',
                sent_time: '',
                sent_date: '',
                status: ''
            },
            unread_messages: 0
        },
        const mook_data = {
            contacts: [
                {
                    id: 1,
                    name: 'Cami',
                    phone: '+54 9 11 6997-9020',
                    profile_pic: '../assets/images/profile-pic.jpg',
                    info: 'Hakuna Matata',
                    last_time_connected: '20:51',
                    groups: [
                        {
                            id: 1,
                            name: 'Grupo de diseño',
                            info: 'pindonga',
                            profile_pic: '../assets/images/profile-pic.jpg',
                            messages: [
                                {
                                    id: 1,
                                    sender: 'YO',
                                    text: 'Holis',
                                    sent_time: '10:20',
                                    sent_date: '16/05/2025',
                                    status: 'seen'
                                },
                                {
                                    id: 2,
                                    sender: 'Mariana',
                                    text: 'Como va?',
                                    sent_time: '11:15',
                                    sent_date: '16/05/2025',
                                    status: 'seen'
                                },
                                {
                                    id: 3,
                                    sender: 'Fabri',
                                    text: 'Todo tranqui',
                                    sent_time: '11:26',
                                    sent_date: '16/05/2025',
                                    status: 'received'
                                },
                            ],
                            last_message: {
                                id: 3, 
                                sender: 'Fabri',
                                text: 'Todo tranqui',
                                sent_time: '11:26',
                                sent_date: '16/05/2025',
                                status: 'received'
                            },
                            unread_messages: 1
                        },
                        {
                            id: 2,
                            name: 'Us',
                            info: 'Spalding Sr.',
                            profile_pic: '../assets/images/profile-pic.jpg',
                            messages: [
                                {
                                    id: 1,
                                    sender: 'Vero',
                                    text: 'Parecemos los locos Adams...',
                                    sent_time: '06:30',
                                    sent_date: '18/07/2025',
                                    status: 'seen'
                                },
                                {
                                    id: 2,
                                    sender: 'Marcos',
                                    text: 'Tenes razón',
                                    sent_time: '20:56',
                                    sent_date: '18/07/2025',
                                    status: 'received'
                                },
                            ],
                            last_message: {
                                id: 0,
                                sender: 'Marcos',
                                text: 'Tenes razón',
                                sent_time: '20:56',
                                sent_date: '18/07/2025',
                                status: 'received'
                            },
                            unread_messages: 0
                        }
                    ],
                    messages: [
                        {
                            id: 1,
                            sender: '',
                            text: 'hola 1',
                            sent_time: '',
                            sent_date: '',
                            status: '' 
                        },
                        {
                            id: 2,
                            sender: '',
                            text: 'hola 1',
                            sent_time: '',
                            sent_date: '',
                            status: '' 
                        }
                    ],
                    last_message: {
                        id: 0,
                        sender: '',
                        text: '',
                        sent_time: '',
                        sent_date: '',
                        status: ''
                    },
                    unread_messages: 0
                },
                {
                    id: 3,
                    name: 'Tomi',
                    phone: '',
                    profile_pic: '',
                    info: '',
                    last_time_connected: '',
                    groups: [],
                    messages: [],
                    last_message: null,
                    unread_messages: 0
                },
            ]
        }
    ]
}