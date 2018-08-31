import firebase from 'firebase/app';
import 'firebase/auth';

// Create Google provider instance
const provider = new firebase.auth.GoogleAuthProvider();

export const getCurrentUser = () => firebase.auth().currentUser;

export default {
    methods: {
        async firebaseLogout() {
            try {
                await firebase.auth().signOut();
            } catch (error) {
                this.$swal('SOS! Couldn\'t signout!');
            }
        },

        googleRedirectSignIn() {
            firebase.auth().signInWithRedirect(provider);
        },

        setAuthStateChangedListener() {
            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    this.isAuthed = true;
                    this.$router.push('/dashboard');
                } else {
                    this.isAuthed = false;
                    this.$router.push('/login');
                }
            });
        },

        async setGoogleRedirectListener() {
            try {
                const { user } = await firebase.auth().getRedirectResult();

                if (user) {
                    this.isAuthed = true;
                    this.$router.push('/dashboard');
                }
            } catch (error) {
                this.$swal('Coult not sign in with Google.');
            }
        }
    }
};