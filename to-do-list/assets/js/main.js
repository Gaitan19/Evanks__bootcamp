
(function () {
    const module = {
        url: 'https://todos.simpleapi.dev/api/',
        key: 'apikey=b254ce3f-1a4d-42cd-b92a-f7fca45efce6',
        urlLogin: '/pages/login.html',
        urlSignUp: '/pages/signUp.html',
        urlTodo: '/',
        main: function () {

            if (JSON.parse(localStorage.getItem('user'))) {
                if (window.location.pathname !== this.urlTodo) {
                    window.location.href = this.urlTodo
                }
                this.savedTasks = [];
                this.cacheDom();
                this.ChannelMergerNodeMode();
                this.bindingEvents();
            } else {

                if (![this.urlLogin, this.urlSignUp].includes(window.location.pathname)) {
                    window.location.href = this.urlLogin
                }

                this.cacheDom();
                this.bindingEvents();
            }
        },
        cacheDom: function () {
            switch (window.location.pathname) {
                case this.urlLogin:
                    this.emailLogin = document.getElementById("Email-login");
                    this.passwordLogin = document.getElementById("Password-login");
                    this.submitLogin = document.getElementById("Submit-login");
                    this.submitSignUp = document.getElementById("redirect-signUp");
                    break;

                case this.urlSignUp:
                    this.emailSignUp = document.getElementById("Email-signUp");
                    this.passwordSignUp = document.getElementById("Password-signUp");
                    this.submitSignUp = document.getElementById("submit-signUp");
                    this.nameSignUp = document.getElementById("name-signUp");
                    this.checkConditions = document.getElementById("conditions");
                    this.redirectLogin = document.getElementById("redirect-login");
                    break;

                case this.urlTodo:
                    this.user = JSON.parse(localStorage.getItem('user'));
                    this.elements = document.getElementById("contElements");
                    this.input = document.getElementById("inputText");
                    this.list = document.getElementById("list");
                    this.switchMode = document.querySelector(".switch-mode");
                    this.mode = localStorage.getItem("mode");
                    this.submit = document.getElementById("submit");
                    this.submitLogout = document.getElementById("Logout");
                    this.userName = document.getElementById("userName");
            }

        },
        login: async function () {

            try {

                const postData = {
                    "email": this.emailLogin.value,
                    "password": this.passwordLogin.value
                }

                if (postData.email && postData.password) {
                    const { data, status } = await axios.post(`${this.url}/users/login?${this.key}`, postData);
                    const statusOk = status === 200;
                    if (statusOk) {
                        localStorage.setItem("user", JSON.stringify(data))
                        window.location.href = this.urlTodo
                    }

                    window.alert(statusOk ? "Login successfully" : "Login unsuccessfully");
                } else {
                    window.alert("Complete the fields");
                }

            }
            catch (error) {
                window.alert(error);
            }
        },

        signUp: async function () {

            try {
                const postData = {
                    "email": this.emailSignUp.value,
                    "name": this.nameSignUp.value,
                    "password": this.passwordSignUp.value
                }
                const isChecked = this.checkConditions.checked;

                if (postData.email && postData.password && postData.name && isChecked) {
                    const { status } = await axios.post(`${this.url}/users/register?${this.key}`, postData);
                    const statusOk = status === 200;
                    if (statusOk) {
                        window.location.href = this.urlLogin
                    }

                    window.alert(statusOk ? "Sign Up successfully" : "Sign Up unsuccessfully");
                } else {
                    window.alert("Complete the fields");
                }

            }
            catch (error) {
                window.alert(error);
            }
        },
        logOut: async function () {

            try {

                const { status } = await axios.post(`${this.url}/users/logout?${this.key}`, "", {
                    headers: {
                        'Authorization': `Bearer ${this.user.token}`
                    }
                });
                const statusOk = status === 200;
                if (statusOk) {
                    localStorage.removeItem('user');
                    window.location.href = this.urlLogin
                }
                window.alert(statusOk ? "Log Out successfully" : "Log Out unsuccess");

            }
            catch (error) {
                window.alert(error);
            }
        },
        getAll: async function () {
            try {
                const { data, status } = await axios.get(`${this.url}/users/${this.user.id}/todos?${this.key}`, {
                    headers: {
                        'Authorization': `Bearer ${this.user.token}`
                    }
                });
                this.savedTasks = data || [];
                const statusOk = status === 200;
                if (statusOk) {
                    this.savedTasks.forEach(task => {
                        const listElement = this.createListElement(task.description, task.completed, task.id);
                        list.appendChild(listElement);
                    });

                    this.contTask();
                    this.changeBackground();
                    this.setEvents();
                } else {
                    window.alert("Tasks couldn't be loaded correctly");
                }

            } catch (error) {
                window.alert(error);
            }
        },

        validateText: function (text) {
            if (text.length > 1 && text.length <= 44) {
                return true;
            } else {
                alert("the task must have betweet 1 and 45 characters");
                return false;
            }
        },
        createListElement: function (text, completed = false, id) {
            let listElement = document.createElement('li');
            listElement.setAttribute('class', `list-group-item To-do-list-group-item`);
            listElement.setAttribute('id', `list${id}`);
            let listItemContent = `
              <div class="form-check">
                <input class="form-check-input To-do-list-check toggleCheckBox ${this.mode === 'dark' ? 'dark-mode-checkBox' : ''}" type="checkbox" id="${id}" ${completed ? 'checked' : ''}> 
                <label class="form-check-label labelTask${id} To-do-list-text ${completed ? 'completed' : ''} ${this.mode === 'dark' ? 'dark-mode-text' : ''}" id="text${id}">${text}</label>
              </div>
              <div class="To-do-list-group-buttons">
                <button type="button" class="btn btn-success To-do-list-button editButt ${this.mode === 'dark' ? 'dark-mode-btn' : ''}" id="${id}">
                  <span class="fa-solid fa-pen-to-square To-do-list-button-icon"></span>
                </button>
                <button type="button" class="btn btn-danger To-do-list-button deleteButt" id="${id}">
                  <span class="fa-sharp fa-solid fa-trash To-do-list-button-icon"></span>
                </button>
              </div>
            `;

            listElement.innerHTML = listItemContent;
            return listElement;
        },
        changeBackground: function () {
            let cont = 1;
            let numTask = document.querySelectorAll('.To-do-list-group-item')

            numTask.forEach((item) => {
                const listItemClass = cont % 2 == 0 ? 'To-do-list-group-white' : 'To-do-list-group-gray';

                item.classList.remove('To-do-list-group-white');
                item.classList.remove('To-do-list-group-gray');
                item.classList.add(listItemClass);

                if (this.mode === 'dark') {
                    item.classList.remove('dark-mode-group-white');
                    item.classList.remove('dark-mode-group-gray');

                    if (listItemClass === 'To-do-list-group-white') {
                        item.classList.add('dark-mode-group-white');
                    } else {
                        item.classList.add('dark-mode-group-gray');
                    }
                }
                cont++;
            });
        },
        contTask: function () {
            let taskElements = list.querySelectorAll('li');
            let numTask = taskElements.length;
            this.elements.value = "";
            this.elements.textContent = `Todos(${numTask})`;
        },
        toggleTask: async function (id, checked) {
            try {
                const label = document.getElementById(`text${id}`)
                let postData = {
                    "description": label.textContent,
                    "completed": checked,
                    "meta": {}
                }
                const { status } = await axios.put(`${this.url}/users/${this.user.id}/todos/${id}?${this.key}`, postData, {
                    headers: {
                        'Authorization': `Bearer ${this.user.token}`
                    }
                });
                const statusOk = status === 200;
                if (statusOk) {
                    const index = this.savedTasks.findIndex(task => task.id == id);
                    this.savedTasks[index] = { ...postData };
                }
                window.alert(statusOk ? "Task status change successfully" : "Task status change unsuccessfully");

            } catch (error) {
                window.alert(error);
            }
        },
        clearTask: function () {
            let taskItems = document.querySelectorAll(".To-do-list-group-item")
            taskItems.forEach((item) => {
                item.parentNode.removeChild(item);
            });
        },
        addList: async function () {
            const inputText = this.validateText(this.input.value);

            if (inputText) {
                try {
                    const postData = {
                        "description": `${this.input.value}`,
                        "completed": false,
                        "meta": {}
                    }

                    const { data, status } = await axios.post(`${this.url}/users/${this.user.id}/todos?${this.key}`, postData, {
                        headers: {
                            'Authorization': `Bearer ${this.user.token}`
                        }
                    });
                    const statusOk = status === 200;
                    if (statusOk) {
                        const listElement = this.createListElement(data.description, data.completed, data.id);
                        list.appendChild(listElement);
                        this.contTask();
                        this.changeBackground();
                        this.setEvents();
                        this.savedTasks.push(data);
                        this.input.value = "";
                    }
                    window.alert(statusOk ? "Task added successfully" : "Task couldn't be added");

                } catch (error) {
                    window.alert(error);
                }
            }

            this.changeBackground();
        },
        requestEdit: async function (listId, currentTextInput, currentText, foundTask, postData) {
            let newText = this.validateText(currentTextInput.value);
            if (newText) {
                postData.description = `${currentTextInput.value}`;
                postData.completed = foundTask.completed;
                const { status } = await axios.put(`${this.url}/users/${this.user.id}/todos/${listId}?${this.key}`, postData, {
                    headers: {
                        'Authorization': `Bearer ${this.user.token}`
                    }
                });
                const statusOk = status === 200;
                if (statusOk) {
                    currentTextInput.replaceWith(currentText);
                    currentText.textContent = postData.description;
                    if (this.mode === 'dark') {
                        currentText.classList.add("dark-mode-text");
                    } else {
                        currentText.classList.remove("dark-mode-text");
                    }
                }

                window.alert(statusOk ? "Task edited successfully" : "Task couldn't be edited");
            }
        },
        editList: async function (listId) {
            try {
                let postData = {
                    "description": `${inputText}`,
                    "completed": false,
                    "meta": {}
                }

                const foundTask = this.savedTasks.find(task => task.id == listId);
                const currentText = document.getElementById(`text${listId}`);
                const currentTextInput = document.createElement('input');
                currentTextInput.value = currentText.textContent;
                currentTextInput.classList.add('To-do-list-input');
                currentTextInput.classList.add('To-do-list-input-edit');
                if (this.mode === 'dark') {
                    currentTextInput.classList.add("dark-mode-text");
                } else {
                    currentTextInput.classList.remove("dark-mode-text");
                }

                currentText.replaceWith(currentTextInput);
                currentTextInput.addEventListener('keydown', async (event) => {
                    if (event.key === 'Enter') {
                        this.requestEdit(listId, currentTextInput, currentText, foundTask, postData)
                    }
                });

            } catch (error) {
                window.alert(error);
            }
        },
        deleteList: async function (listId) {
            try {
                const { status } = await axios.delete(`${this.url}/users/${this.user.id}/todos/${listId}?${this.key}`, {
                    headers: {
                        'Authorization': `Bearer ${this.user.token}`
                    }
                });
                const statusOk = status === 200;
                if (statusOk) {
                    const deleteItem = document.getElementById(`list${listId}`);
                    const index = this.savedTasks.findIndex(task => task.id == listId);
                    this.savedTasks.splice(index, 1);
                    deleteItem.parentNode.removeChild(deleteItem);
                    this.changeBackground();
                    this.contTask();
                }
                window.alert(statusOk ? "Task deleted successfully" : "Task couldn't be deleted");

            } catch (error) {
                window.alert(error);
            }

        },
        saveMode: function () {
            localStorage.setItem("mode", this.mode);
        },
        enableDarkMode: function () {
            const darkModeEditText = document.querySelectorAll(".To-do-list-input-edit");
            const darkModeGray = document.querySelectorAll(".To-do-list-group-gray");
            const darkModeWhi = document.querySelectorAll(".To-do-list-group-white");
            const darkModeText = document.querySelectorAll(".To-do-list-text");
            const darkModeBtn = document.querySelectorAll(".btn-success");
            const darkModeCheck = document.querySelectorAll(".To-do-list-check");

            document.querySelector(".switch-mode-icon").classList.remove("fa-sun");
            document.querySelector(".switch-mode-icon").classList.add("fa-moon");
            document.querySelector(".To-do-list").classList.add("dark-mode");
            document.querySelector(".To-do-list-container").classList.add("dark-mode-container");
            document.querySelector(".To-do-list-container-text").classList.add("dark-mode-container-text");
            document.querySelector(".To-do-list-header").classList.add("dark-mode-container");
            document.querySelector(".To-do-list-menu-text").classList.add("dark-mode-text");
            document.querySelector(".To-do-list-logout").classList.add("dark-mode-text");

            darkModeEditText.forEach((item) => {
                item.classList.add("dark-mode-text");
            });

            darkModeGray.forEach((item) => {
                item.classList.add("dark-mode-group-gray");
            });

            darkModeWhi.forEach((item) => {
                item.classList.add("dark-mode-group-white");
            });

            darkModeText.forEach((item) => {
                item.classList.add("dark-mode-text");
            });

            darkModeBtn.forEach((item) => {
                item.classList.add("dark-mode-btn");
            });

            darkModeCheck.forEach((item) => {
                item.classList.add("dark-mode-checkBox");
            });
        },
        enableLightMode: function () {
            const darkModeGray = document.querySelectorAll(".dark-mode-group-gray");
            const darkModeWhi = document.querySelectorAll(".dark-mode-group-white");
            const darkModeText = document.querySelectorAll(".To-do-list-text");
            const darkModeBtn = document.querySelectorAll(".btn-success");
            const darkModeCheck = document.querySelectorAll(".To-do-list-check");
            const darkModeEditText = document.querySelectorAll(".To-do-list-input-edit");

            document.querySelector(".switch-mode-icon").classList.remove("fa-moon");
            document.querySelector(".switch-mode-icon").classList.add("fa-sun");
            document.querySelector(".To-do-list").classList.remove("dark-mode");
            document.querySelector(".To-do-list-container").classList.remove("dark-mode-container");
            document.querySelector(".To-do-list-container-text").classList.remove("dark-mode-container-text");
            document.querySelector(".To-do-list-header").classList.remove("dark-mode-container");
            document.querySelector(".To-do-list-menu-text").classList.remove("dark-mode-text");
            document.querySelector(".To-do-list-logout").classList.remove("dark-mode-text");

            darkModeGray.forEach((item) => {
                item.classList.remove("dark-mode-group-gray");
            });

            darkModeWhi.forEach((item) => {
                item.classList.remove("dark-mode-group-white");
            });

            darkModeText.forEach((item) => {
                item.classList.remove("dark-mode-text");
            });

            darkModeBtn.forEach((item) => {
                item.classList.remove("dark-mode-btn");
            });

            darkModeCheck.forEach((item) => {
                item.classList.remove("dark-mode-checkBox");
            });

            darkModeEditText.forEach((item) => {
                item.classList.remove("dark-mode-text");
            });
        },
        ChannelMergerNodeMode: function () {
            if (this.mode === "dark") {
                this.enableDarkMode();

            } else {
                this.enableLightMode();
            }
        },
        setEvents: function () {
            const edits = document.querySelectorAll(".editButt");
            const deletes = document.querySelectorAll(".deleteButt");
            const markTasks = document.querySelectorAll(".toggleCheckBox");

            edits.forEach((item) => {

                item.addEventListener('click', () => {
                    this.editList(item.id);
                });
            });

            deletes.forEach((item) => {

                item.addEventListener('click', () => {
                    this.deleteList(item.id);
                });
            });

            markTasks.forEach((item) => {
                item.addEventListener('click', () => {
                    this.toggleTask(item.id, item.checked);
                });
            });
        },
        bindingEvents: function () {

            switch (window.location.pathname) {
                case this.urlLogin:
                    this.submitLogin.addEventListener('click', async () => {
                        this.login();
                    });

                    window.addEventListener('keydown', (event) => {
                        if (event.key === 'Enter') {
                            this.login();
                        }
                    });

                    this.submitSignUp.addEventListener('click', () => {
                        window.location.href = this.urlSignUp
                    });
                    break;

                case this.urlSignUp:
                    this.submitSignUp.addEventListener('click', async () => {
                        this.signUp();
                    });

                    window.addEventListener('keydown', (event) => {
                        if (event.key === 'Enter') {
                            this.signUp();
                        }
                    });

                    this.redirectLogin.addEventListener('click', () => {
                        window.location.href = this.urlLogin
                    });
                    break;

                case this.urlTodo:
                    window.addEventListener('load', () => {
                        this.userName.textContent = this.user.name;
                        this.getAll();
                    });

                    this.input.addEventListener('keydown', (event) => {
                        if (event.key === 'Enter') {
                            if (this.input.value && this.input.value.length > 1 && this.input.classList.contains('To-do-list-input')) {
                                this.addList();
                            }
                        }
                    });
                    this.submitLogout.addEventListener('click', () => {
                        this.logOut();
                    });

                    this.switchMode.addEventListener("change", () => {
                        if (this.mode == 'light') {
                            this.mode = "dark";
                        } else {
                            this.mode = "light";
                        }

                        this.ChannelMergerNodeMode();
                        this.saveMode();
                    });

                    this.submit.addEventListener('click', () => {
                        this.addList();

                    });
            }

        }
    }

    module.main();
}
)();