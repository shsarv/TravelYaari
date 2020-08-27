const heading = 'Please Meet Our Team';
let i = 0;

const typing = () => {
    if (i < heading.length) {
        document.querySelector('.team-heading').innerHTML += heading.charAt(i);
        i++;

        setTimeout(typing, 150);
    }
}

typing();