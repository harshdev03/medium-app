
import { toast } from 'react-toastify';

export function serverWarningNotify() {
  toast.warning("Something is up with the server");
}


export function errorSignupNotify() {
  toast.error("Error while signing up");
}
export function succesSignupNotify() {
  toast.success("Sign up successfully");
}



export function sucessSigninNotify() {
  toast.success("Sign in successfully");
}
export function errorSigninNotify() {
  toast.error("Error while signing in");
}

export function sucessBlogs(){
  toast.success("getting the blogs");
}
export function errorBlogs() {
  toast.error("Error while getting the blogs");
}
