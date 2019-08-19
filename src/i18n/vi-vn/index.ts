// This is just an example,
// so you can safely delete all default props below

export default {
  global: {
    messages: {
      info: {
        authenticated: {
          prefix: 'Nếu bạn muốn ',
          link: 'đăng nhập',
          suffix:
            ', bạn có thể thử với tài khoản mặc định:<br/>- Quản trị viên (tài khoản="admin" và mật khẩu="admin") <br/>- Người dùng (tài khoản="user" và mật khẩu="user").'
        },
        register: {
          noaccount: 'Bạn vẫn chưa có tài khoản?',
          link: 'Đăng ký tài khoản mới'
        }
      },
      error: {
        dontmatch: 'Xác nhận mật khẩu không khớp!'
      },
      validate: {
        newpassword: {
          required: 'Bạn phải nhập mật khẩu.',
          minlength: 'Mật khẩu phải có ít nhất 4 ký tự.',
          maxlength: 'Mật khẩu không được vượt quá 50 ký tự.',
          strength: 'Độ mạnh của mật khẩu:'
        },
        confirmpassword: {
          sameAsPassword: 'Bạn phải nhập đúng mật khẩu ở trên để xác nhận.',
          required: 'Bạn phải nhập lại mật khẩu để xác nhận.',
          minlength: 'Mật khẩu phải có ít nhất 4 ký tự.',
          maxlength: 'Mật khẩu không được vượt quá 50 ký tự.'
        },
        email: {
          required: 'Bạn phải nhập email.',
          invalid: 'Email bạn nhập không hợp lệ.',
          minlength: 'Email phải có ít nhất 5 ký tự.',
          maxlength: 'Email không được vượt quá 50 ký tự.'
        }
      }
    }
  },
  home: {
    title: 'Chào mừng bạn đến với Java Hipster!',
    subtitle: 'Đây là trang chủ của bạn',
    logged: {
      message: 'Bạn đang đăng nhập bằng tài khoản "{username}".'
    },
    question: 'Nếu bạn có bất kỳ câu hỏi nào về JHipster vui lòng truy cập:',
    link: {
      homepage: 'Trang chủ JHipster',
      stackoverflow: 'JHipster trên Stack Overflow',
      bugtracker: 'Theo dõi các lỗi JHipster',
      chat: 'Phòng chat công cộng JHipster',
      follow: 'Theo dõi @java_hipster trên Twitter'
    },
    like:
      'Nếu bạn thích JHipster, đừng quên cho chúng tôi thêm một ngôi sao trên',
    github: 'GitHub'
  },
  register: {
    title: 'Đăng ký',
    form: {
      button: 'Đăng ký'
    },
    messages: {
      validate: {
        login: {
          required: 'Bạn phải nhập tên tài khoản.',
          minlength: 'Tên tài khoản phải có ít nhất 1 ký tự.',
          maxlength: 'Tên tài khoản không được vượt quá 50 ký tự.',
          pattern: 'Tên tài khoản chỉ có thể chứa các ký tự in thường và số.'
        }
      },
      success:
        '<strong>Đăng ký thành công!</strong> Bạn vui lòng kiểm tra hộp thư để xác nhận tài khoản.',
      error: {
        fail: '<strong>Đăng ký thất bại!</strong> Vui lòng thử lại sau.',
        userexists:
          '<strong>Tên tài khoản này đã được sử dụng!</strong> Bạn vui lòng chọn tên tài khoản khác.',
        emailexists:
          '<strong>Email này đã được sử dụng!</strong> Bạn vui lòng nhập email khác.'
      }
    }
  },
  error: {
    title: 'Trang thông tin lỗi!',
    http: {
      '400': 'Bad request.',
      '403': 'Bạn không có quyền xem trang này.',
      '404': 'Trang không tồn tại.',
      '405': 'The HTTP verb you used is not supported for this URL.',
      '500': 'Internal server error.'
    },
    concurrencyFailure:
      'Another user modified this data at the same time as you. Your changes were rejected.',
    validation: 'Validation error on the server.'
  },
  login: {
    title: 'Đăng nhập',
    form: {
      password: 'Mật khẩu',
      'password.placeholder': 'Nhập mật khầu của bạn',
      rememberme: 'Nhớ tài khoản',
      button: 'Đăng nhập'
    },
    messages: {
      error: {
        authentication:
          '<strong>Đăng nhập thất bại!</strong> Bạn vui lòng kiểm tra thông tin đăng nhập và thử lại.'
      }
    },
    password: {
      forgot: 'Bạn quên mật khẩu?'
    }
  }
};
