# Here i Create a Facebook-Validation-LocalStorge
```
Welcome to My Github Profile.
as I create a simple  Facebook-Validation-LocalStorge from scratch using HTML, CSS, and JavaScript.
```
Here's an explanation of the code in a simple and easy-to-understand :

1) The code begins by defining variables using const to store references to various elements on the web page, such as buttons and input fields.

2) An event listener is added to the "createAccount" button. When this button is clicked, it triggers a function that displays the sign-up page and reduces the opacity of the main content area.

3) Another event listener is added to the "close-sign-up" button. When clicked, it triggers a function that hides the sign-up page and restores the opacity of the main content area.

4) The code defines a function called submitForm that handles form submission. It prevents the default form submission behavior to perform custom actions.

5) Inside the submitForm function, the values of various input fields (such as email, password, first name, last name, etc.) are retrieved.

6) The form values are then used to create a JavaScript object called formObj that represents the user's form data.

7) The code checks if there are any previously stored forms in the browser's local storage. If not, it initializes an empty array.

8) It also checks if a form with the same email and password already exists in the stored forms. If a match is found, an alert is displayed indicating that the email is already registered.

9) If the email is not already registered, the formObj is added to the storedForms array, and the updated array is stored back in the local storage.

10) An alert is displayed to indicate that the form submission was successful. Additionally, the sign-up page is hidden and the opacity of the main content area is restored.

11) The code includes a login function that handles the login process. It retrieves the entered email and password values.

13) It then checks if a form with the same email and password combination exists in the stored forms. If found, an alert message welcomes the user to Facebook. Otherwise, an alert indicates that the account is invalid and prompts the user to create a new account.

14) After the login process, the email and password input fields are cleared.


![image](https://github.com/ParagUnhale1998/Facebook-Validation-LocalStorge/blob/main/preview.png)
