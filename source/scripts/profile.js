const name = 'FitUp - Official';
const status = 'Get Ready 🔥';
const profile_picture = '../../assets/profile/profile_pic.png';

document.addEventListener('DOMContentLoaded', () => {setProfilePicture(profile_picture), setProfileInformation(name, status)});

function setProfilePicture(profile_picture) {
    const profile_pic_container = document.createElement('div');
    profile_pic_container.className = 'profile-picture-container';

    const profile_pic = document.createElement('img');
    profile_pic.className = 'profile-picture';
    profile_pic.src = profile_picture;
    profile_pic.alt = 'Profile picture';

    profile_pic_container.appendChild(profile_pic);

    document.getElementById('profile-container').appendChild(profile_pic_container);
}

function setProfileInformation(name, status) {
    const profile_info_container = document.createElement('div');
    profile_info_container.className = 'profile-info-container';

    const profile_name = document.createElement('p');
    profile_name.className = 'profile-name';
    profile_name.textContent = name;

    const profile_status = document.createElement('p');
    profile_status.className = 'profile-status';
    profile_status.textContent = status;

    profile_info_container.appendChild(profile_name);
    profile_info_container.appendChild(profile_status);

    document.getElementById('profile-container').appendChild(profile_info_container);
}