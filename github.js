
class GitHub {
    constructor(){
        this.client_id = 'ea372863e12cadd0bd3f';
        this.client_secret = '7c534158ae768f6ed89ad47c1993f9640d51baf7';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);  

        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}

