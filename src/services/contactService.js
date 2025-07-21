import mook_data from "../data/contact-mook.js"

export const getCurrentUser = () => {
    return mook_data.current_user
}

export const getContactsList = () => {
    return mook_data.contacts
}

export const getGroupsList = () => {
    return mook_data.groups
}

export const getContactById = (contact_id) => {
    return mook_data.contacts.find(contact => contact.id === contact_id) || null
}

export const getGroupById = (group_id) => {
    return mook_data.groups.find(group => group.id === group_id) || null
}