/* Imagenes de perfil */
import gruProfilePic from '../assets/images/gru-profile-pic.jpg'
import agnesProfilePic from '../assets/images/agnes-profile-pic.jpg'
import edithProfilePic from '../assets/images/edith-profile-pic.jpg'
import margoProfilePic from '../assets/images/margo-profile-pic.jpg'
import nefarioProfilePic from '../assets/images/nefario-profile-pic.jpg'
import vectorProfilePic from '../assets/images/vector-profile-pic.jpg'
import bobProfilePic from '../assets/images/bob-profile-pic.jpg'
import stuartProfilePic from '../assets/images/stuart-profile-pic.jpg'
import kevinProfilePic from '../assets/images/kevin-profile-pic.jpg'
import userProfilePic from '../assets/images/user-profile-pic.jpg'

// Este archivo solo contiene los datos de los contactos, simula ser un servidor.

const mook_data = {
    current_user: {
        id: 0,
        name: 'Anonimo',
        phone: '+54 9 11 0000-0000',
        profile_pic: userProfilePic,
        info: 'Disponible',
        group_ids: []
    },

    contacts: [
        {
            id: 1,
            name: 'Gru',
            phone: '+54 9 11 2034-5871',
            profile_pic: gruProfilePic,
            info: '¡Luz, cámara… desintegración!',
            last_time_connected: '20:51',
            group_ids: [],
            messages: [
                {
                    id: 1,
                    sender_id: 0,
                    text: 'hola 1',
                    sent_time: '',
                    sent_date: '',
                    status: '' 
                },
                {
                    id: 2,
                    sender_id: 0,
                    text: 'hola 1',
                    sent_time: '',
                    sent_date: '',
                    status: '' 
                }
            ],
            last_message: {
                id: 0,
                sender_id: 0,
                text: '',
                sent_time: '',
                sent_date: '',
                status: ''
            },
            unread_messages: 0
        },
        {
            id: 2,
            name: 'Agnes',
            phone: '+54 9 11 4456-2290',
            profile_pic: agnesProfilePic,
            info: '¡Es tan esponjoooooso que voy a moriiiir!',
            last_time_connected: '',
            group_ids: [],
            messages: [
                {
                    id: 1,
                    sender_id: 0,
                    text: 'hola 1',
                    sent_time: '',
                    sent_date: '',
                    status: '' 
                },
                {
                    id: 2,
                    sender_id: 0,
                    text: 'hola 1',
                    sent_time: '',
                    sent_date: '',
                    status: '' 
                }
            ],
            last_message: {
                id: 0,
                sender_id: 0,
                text: '',
                sent_time: '',
                sent_date: '',
                status: ''
            },
            unread_messages: 0
        },
        {
            id: 3,
            name: 'Edith',
            phone: '+54 9 11 3710-9823',
            profile_pic: edithProfilePic,
            info: 'El peligro es mi segundo nombre... bueno, el tercero.',
            last_time_connected: '',
            group_ids: [],
            messages: [
                {
                    id: 1,
                    sender_id: '',
                    text: 'hola 1',
                    sent_time: '',
                    sent_date: '',
                    status: '' 
                },
                {
                    id: 2,
                    sender_id: '',
                    text: 'hola 1',
                    sent_time: '',
                    sent_date: '',
                    status: '' 
                }
            ],
            last_message: {
                id: 0,
                sender_id: '',
                text: '',
                sent_time: '',
                sent_date: '',
                status: ''
            },
            unread_messages: 0
        },
        {
            id: 4,
            name: 'Margo',
            phone: '+54 9 11 5123-6689',
            profile_pic: margoProfilePic,
            info: 'Ser la hermana mayor no es fácil, créeme.',
            last_time_connected: '',
            group_ids: [],
            messages: [
                {
                    id: 1,
                    sender_id: '',
                    text: 'hola 1',
                    sent_time: '',
                    sent_date: '',
                    status: '' 
                },
                {
                    id: 2,
                    sender_id: '',
                    text: 'hola 1',
                    sent_time: '',
                    sent_date: '',
                    status: '' 
                }
            ],
            last_message: {
                id: 0,
                sender_id: '',
                text: '',
                sent_time: '',
                sent_date: '',
                status: ''
            },
            unread_messages: 0
        },
        {
            id: 5,
            name: 'Profesor Nefario',
            phone: '+54 9 11 3844-1177',
            profile_pic: nefarioProfilePic,
            info: '¡Creí que dijiste "baño" congelador!',
            last_time_connected: '',
            group_ids: [],
            messages: [
                {
                    id: 1,
                    sender_id: '',
                    text: 'hola 1',
                    sent_time: '',
                    sent_date: '',
                    status: '' 
                },
                {
                    id: 2,
                    sender_id: '',
                    text: 'hola 1',
                    sent_time: '',
                    sent_date: '',
                    status: '' 
                }
            ],
            last_message: {
                id: 0,
                sender_id: '',
                text: '',
                sent_time: '',
                sent_date: '',
                status: ''
            },
            unread_messages: 0
        },
        {
            id: 6,
            name: 'Vector Perkins',
            phone: '+54 9 11 2266-4422',
            profile_pic: vectorProfilePic,
            info: 'Vector... ¡Con V de victoria!',
            last_time_connected: '',
            group_ids: [],
            messages: [
                {
                    id: 1,
                    sender_id: '',
                    text: 'hola 1',
                    sent_time: '',
                    sent_date: '',
                    status: '' 
                },
                {
                    id: 2,
                    sender_id: '',
                    text: 'hola 1',
                    sent_time: '',
                    sent_date: '',
                    status: '' 
                }
            ],
            last_message: {
                id: 0,
                sender_id: '',
                text: '',
                sent_time: '',
                sent_date: '',
                status: ''
            },
            unread_messages: 0
        },
        {
            id: 7,
            name: 'Bob',
            phone: '+54 9 11 6584-0031',
            profile_pic: bobProfilePic,
            info: 'King Bob 👑',
            last_time_connected: '',
            group_ids: [],
            messages: [
                {
                    id: 1,
                    sender_id: '',
                    text: 'hola 1',
                    sent_time: '',
                    sent_date: '',
                    status: '' 
                },
                {
                    id: 2,
                    sender_id: '',
                    text: 'hola 1',
                    sent_time: '',
                    sent_date: '',
                    status: '' 
                }
            ],
            last_message: {
                id: 0,
                sender_id: '',
                text: '',
                sent_time: '',
                sent_date: '',
                status: ''
            },
            unread_messages: 0
        },
        {
            id: 8,
            name: 'Stuart',
            phone: '+54 9 11 4988-1174',
            profile_pic: stuartProfilePic,
            info: 'Banana y rock and roll 🎸🍌',
            last_time_connected: '',
            group_ids: [],
            messages: [
                {
                    id: 1,
                    sender_id: '',
                    text: 'hola 1',
                    sent_time: '',
                    sent_date: '',
                    status: '' 
                },
                {
                    id: 2,
                    sender_id: '',
                    text: 'hola 1',
                    sent_time: '',
                    sent_date: '',
                    status: '' 
                }
            ],
            last_message: {
                id: 0,
                sender_id: '',
                text: '',
                sent_time: '',
                sent_date: '',
                status: ''
            },
            unread_messages: 0
        },
        {
            id: 9,
            name: 'Kevin',
            phone: '+54 9 11 7233-0157',
            profile_pic: kevinProfilePic,
            info: '¡Banana! Pero con estrategia.',
            last_time_connected: '',
            group_ids: [],
            messages: [
                {
                    id: 1,
                    sender_id: '',
                    text: 'hola 1',
                    sent_time: '',
                    sent_date: '',
                    status: '' 
                },
                {
                    id: 2,
                    sender_id: '',
                    text: 'hola 1',
                    sent_time: '',
                    sent_date: '',
                    status: '' 
                }
            ],
            last_message: {
                id: 0,
                sender_id: '',
                text: '',
                sent_time: '',
                sent_date: '',
                status: ''
            },
            unread_messages: 0
        },
        {
            id: 10,
            name: 'Lucy Wilde',
            phone: '+54 9 11 7233-0157',
            profile_pic: kevinProfilePic,
            info: '¡Labial eléctrico! ⚡💄',
            last_time_connected: '',
            group_ids: [],
            messages: [
                {
                    id: 1,
                    sender_id: '',
                    text: 'hola 1',
                    sent_time: '',
                    sent_date: '',
                    status: '' 
                },
                {
                    id: 2,
                    sender_id: '',
                    text: 'hola 1',
                    sent_time: '',
                    sent_date: '',
                    status: '' 
                }
            ],
            last_message: {
                id: 0,
                sender_id: '',
                text: '',
                sent_time: '',
                sent_date: '',
                status: ''
            },
            unread_messages: 0
        },
        {
            id: 11,
            name: 'Silas Pietraserón (jefe de la Liga Anti-Villanos)',
            phone: '+54 9 11 2155-7440',
            profile_pic: '',
            info: 'Este mensaje se autodestruirá en 5 segundos.',
            last_time_connected: '',
            group_ids: [],
            messages: [],
            last_message: null,
            unread_messages: 0
        },
        {
            id: 12,
            name: 'El Macho (Eduardo Pérez)',
            phone: '+54 9 11 4200-2210',
            profile_pic: '',
            info: '¡Yo soy El Macho!',
            last_time_connected: '',
            group_ids: [],
            messages: [],
            last_message: null,
            unread_messages: 0
        },
        {
            id: 13,
            name: 'Scarlett Overkill',
            phone: '+54 9 11 2444-9831',
            profile_pic: '',
            info: '¡Buenas noches, mundo! Scarlett Overkill está aquí.',
            last_time_connected: '',
            group_ids: [],
            messages: [],
            last_message: null,
            unread_messages: 0
        },
        {
            id: 14,
            name: 'Herb Overkill',
            phone: '+54 9 11 3242-6790',
            profile_pic: '',
            info: '¡Amor, activé la lava otra vez!',
            last_time_connected: '',
            group_ids: [],
            messages: [],
            last_message: null,
            unread_messages: 0
        },
        {
            id: 15,
            name: 'Marlena Gru',
            phone: '+54 9 11 3150-9011',
            profile_pic: '',
            info: 'No esperaba mucho de ti, Gru… y aún así, me decepcionaste.',
            last_time_connected: '',
            group_ids: [],
            messages: [],
            last_message: null,
            unread_messages: 0
        },
        {
            id: 16,
            name: 'Antonio Pérez',
            phone: '+54 9 11 2711-8899',
            profile_pic: '',
            info: 'Me rompes el corazón, nena.',
            last_time_connected: '',
            group_ids: [],
            messages: [],
            last_message: null,
            unread_messages: 0
        },
        {
            id: 17,
            name: 'Señor Perkins (padre de Vector, presidente del Banco del Mal)',
            phone: '+54 9 11 3444-5500',
            profile_pic: '',
            info: 'Mi hijo no es un fracaso. Solo es… excéntrico.',
            last_time_connected: '',
            group_ids: [],
            messages: [],
            last_message: null,
            unread_messages: 0
        },
        {
            id: 18,
            name: 'Shannon',
            phone: '+54 9 11 3390-8761',
            profile_pic: '',
            info: '¡Tienes suerte de estar saliendo conmigo!',
            last_time_connected: '',
            group_ids: [],
            messages: [],
            last_message: null,
            unread_messages: 0
        },
        {
            id: 19,
            name: 'Floyd',
            phone: '+54 9 11 5632-7770',
            profile_pic: '',
            info: '¡Estacioné mi auto eléctrico frente a tu casa!',
            last_time_connected: '',
            group_ids: [],
            messages: [],
            last_message: null,
            unread_messages: 0
        },
        {
            id: 20,
            name: 'Jillian',
            phone: '+54 9 11 4050-6610',
            profile_pic: '',
            info: '¡Tengo la cita perfecta para ti!',
            last_time_connected: '',
            group_ids: [],
            messages: [],
            last_message: null,
            unread_messages: 0
        },
        {
            id: 21,
            name: 'Dru Gru',
            phone: '+54 9 11 7788-1234',
            profile_pic: '',
            info: '¡Vamos a robar algo juntos, hermano!',
            last_time_connected: '',
            group_ids: [],
            messages: [],
            last_message: null,
            unread_messages: 0
        },
        {
            id: 22,
            name: 'Reina Isabel II',
            phone: '+54 9 11 1111-1952',
            profile_pic: '',
            info: '¡Esa es mi corona, bribones!',
            last_time_connected: '',
            group_ids: [],
            messages: [],
            last_message: null,
            unread_messages: 0
        },
        {
            id: 23,
            name: 'Master Chow',
            phone: '+54 9 11 2022-9001',
            profile_pic: '',
            info: 'La energía viene del chi... y de este puño.',
            last_time_connected: '',
            group_ids: [],
            messages: [],
            last_message: null,
            unread_messages: 0
        },
        {
            id: 24,
            name: 'Hermana Puñete',
            phone: '+54 9 11 3033-6670',
            profile_pic: '',
            info: '¡Alabado sea... mi nunchaku!',
            last_time_connected: '',
            group_ids: [],
            messages: [],
            last_message: null,
            unread_messages: 0
        },
        
    ],

    groups: [
        {
            id: 1,
            name: 'Grupo de diseño',
            created_date: '10/07/2025',
            info: 'pindonga',
            profile_pic: '../assets/images/profile-pic.jpg',
            participant_ids: [0, 1, 2, 3], // IDs de contacts + current_user
            messages: [
                {
                id: 1,
                sender_id: 0,
                text: 'Holis',
                sent_time: '10:20',
                sent_date: '16/05/2025',
                status: 'seen'
                },
                {
                id: 2,
                sender_id: 1,
                text: 'Cómo va?',
                sent_time: '11:15',
                sent_date: '16/05/2025',
                status: 'seen'
                }
            ],
            last_message: {
                id: 2,
                sender_id: 1,
                text: 'Cómo va?',
                sent_time: '11:15',
                sent_date: '16/05/2025',
                status: 'seen'
            },
            unread_messages: 1
            },
            {
            id: 2,
            name: 'Villanos Unidos',
            created_date: '23/07/2025',
            info: 'Sr.',
            profile_pic: '../assets/images/profile-pic.jpg',
            participant_ids: [0, 1, 4], // Ejemplo
            messages: [],
            last_message: {},
            unread_messages: 0
        },
    ]
}

export default mook_data