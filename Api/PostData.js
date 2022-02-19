import Password from "antd/lib/input/Password";
import axios from "axios";

class PostData {
  constructor() {
    this.result = [];
  }

  CreateNewsLetter = (email, settingErrors) => {
    const res = async () => {
      const resp = await axios
        .post("/newsletter", {
          email: email
        })

        .catch(function (error) {
          console.log(error.response)
          settingErrors(error.response.data.message);
        });
      return resp;
    };
    return res();
  };
  AddNotes = (detail, title) => {
    const res = async () => {
      const resp = await axios
        .post("/note", {
          title: title,
          detail: detail,
          city:"lahore", 
          state:"pakistan"
        })

        .catch(function (error) {
          console.log(error.response)
          settingErrors(error.response.data.message);
        });
      return resp;
    };
    return res();
  };
    Return() {
      return this.result;
    }
  }
export default new PostData();