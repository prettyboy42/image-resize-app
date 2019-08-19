// This is just an example,
// so you can safely delete all default props below

export default {
  global: {
    messages: {
      info: {
        authenticated: {
          prefix: 'If you want to ',
          link: 'sign in',
          suffix:
            ', you can try the default accounts:<br/>- Administrator (login="admin" and password="admin") <br/>- User (login="user" and password="user").'
        },
        register: {
          noaccount: 'You don\'t have an account yet?',
          link: 'Register a new account'
        }
      },
      error: {
        dontmatch: 'The password and its confirmation do not match!'
      },
      validate: {
        newpassword: {
          required: 'Your password is required.',
          minlength: 'Your password is required to be at least 4 characters.',
          maxlength: 'Your password cannot be longer than 50 characters.',
          strength: 'Password strength:'
        },
        confirmpassword: {
          sameAsPassword: 'Passwords must be identical.',
          required: 'Your confirmation password is required.',
          minlength:
            'Your confirmation password is required to be at least 4 characters.',
          maxlength:
            'Your confirmation password cannot be longer than 50 characters.'
        },
        email: {
          required: 'Your email is required.',
          invalid: 'Your email is invalid.',
          minlength: 'Your email is required to be at least 5 characters.',
          maxlength: 'Your email cannot be longer than 50 characters.'
        }
      }
    }
  },
  home: {
    title: 'Welcome, Java Hipster!',
    subtitle: 'This is your homepage',
    logged: {
      message: 'You are logged in as user "{{username}}".'
    },
    question: 'If you have any question on JHipster:',
    link: {
      homepage: 'JHipster homepage',
      stackoverflow: 'JHipster on Stack Overflow',
      bugtracker: 'JHipster bug tracker',
      chat: 'JHipster public chat room',
      follow: 'follow @java_hipster on Twitter'
    },
    like: 'If you like JHipster, don\'t forget to give us a star on',
    github: 'GitHub'
  },
  register: {
    title: 'Registration',
    form: {
      button: 'Register'
    },
    messages: {
      validate: {
        login: {
          required: 'Your username is required.',
          minlength: 'Your username is required to be at least 1 character.',
          maxlength: 'Your username cannot be longer than 50 characters.',
          pattern: 'Your username can only contain letters and digits.'
        }
      },
      success:
        '<strong>Registration saved!</strong> Please check your email for confirmation.',
      error: {
        fail: '<strong>Registration failed!</strong> Please try again later.',
        userexists:
          '<strong>Login name already registered!</strong> Please choose another one.',
        emailexists:
          '<strong>Email is already in use!</strong> Please choose another one.'
      }
    }
  },
  error: {
    title: 'Error page!',
    http: {
      '400': 'Bad request.',
      '403': 'You are not authorized to access this page.',
      '404': 'The page does not exist.',
      '405': 'The HTTP verb you used is not supported for this URL.',
      '500': 'Internal server error.'
    },
    concurrencyFailure:
      'Another user modified this data at the same time as you. Your changes were rejected.',
    validation: 'Validation error on the server.'
  },
  login: {
    title: 'Sign in',
    form: {
      password: 'Password',
      'password.placeholder': 'Your password',
      rememberme: 'Remember me',
      button: 'Sign in'
    },
    messages: {
      error: {
        authentication:
          '<strong>Failed to sign in!</strong> Please check your credentials and try again.'
      }
    },
    password: {
      forgot: 'Did you forget your password?'
    }
  }
};
