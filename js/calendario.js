document.addEventListener('DOMContentLoaded', function () {
    const calendarTable = document.getElementById('calendarTable');
    const agendaList = document.getElementById('agendaList');
    const currentMonthYear = document.getElementById('currentMonthYear');
    const appointmentForm = document.getElementById('appointmentForm');
    const addAppointmentButton = document.getElementById('addAppointment');

    let currentDate = new Date();
    let selectedDate = null;
    let selectedAppointmentIndex = null;
    let agendaData = {};

    function renderCalendar(year, month) {
        calendarTable.innerHTML = '';

        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const daysInMonth = lastDay.getDate();

        currentMonthYear.textContent = `${getMonthName(month)} ${year}`;

        let dayCount = 1;
        for (let i = 0; i < 6; i++) {
            const row = calendarTable.insertRow(i);

            for (let j = 0; j < 7; j++) {
                const cell = row.insertCell(j);

                if ((i === 0 && j < firstDay.getDay()) || dayCount > daysInMonth) {
                    continue;
                }

                const date = new Date(year, month, dayCount);
                cell.textContent = dayCount;
                cell.dataset.date = formatDate(date);

                if (date.toDateString() === currentDate.toDateString()) {
                    cell.classList.add('today');
                }

                dayCount++;
            }
        }
    }

    function formatDate(date) {
        const year = date.getFullYear();
        const month = addZero(date.getMonth() + 1);
        const day = addZero(date.getDate());
        return `${year}-${month}-${day}`;
    }

    function getMonthName(month) {
        const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
        return monthNames[month];
    }

    function addZero(num) {
        return num < 10 ? "0" + num : num;
    }

    function updateAgenda() {
        agendaList.innerHTML = '';

        if (agendaData[selectedDate]) {
            agendaData[selectedDate].forEach((appointment, index) => {
                const listItem = document.createElement('li');
                listItem.textContent = `${appointment.date} - ${appointment.time} - ${appointment.location}`;
                
                // Adiciona botões de editar e deletar
                const editButton = document.createElement('button');
                editButton.textContent = 'Editar';
                editButton.addEventListener('click', () => editAppointment(selectedDate, index));

                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Deletar';
                deleteButton.addEventListener('click', () => deleteAppointment(selectedDate, index));

                listItem.appendChild(editButton);
                listItem.appendChild(deleteButton);

                agendaList.appendChild(listItem);
            });
        }
    }

    function setupDayClickEvent() {
        calendarTable.addEventListener('click', function (event) {
            const target = event.target;
            if (target.tagName === 'TD' && target.dataset.date) {
                selectedDate = target.dataset.date;
                updateAgenda();
            }
        });
    }

    function addAppointment() {
        const date = document.getElementById('appointmentDate').value;
        const time = document.getElementById('appointmentTime').value;
        const location = document.getElementById('appointmentLocation').value;

        if (!agendaData[selectedDate]) {
            agendaData[selectedDate] = [];
        }

        agendaData[selectedDate].push({
            date,
            time,
            location
        });

        updateAgenda();
        // Limpa os campos do formulário após adicionar um compromisso
        appointmentForm.reset();
        // Salva os compromissos no localStorage
        saveToLocalStorage();
    }

    function editAppointment(selectedDate, index) {
        // Preenche o formulário com os dados do compromisso selecionado
        const appointment = agendaData[selectedDate][index];
        document.getElementById('appointmentDate').value = appointment.date;
        document.getElementById('appointmentTime').value = appointment.time;
        document.getElementById('appointmentLocation').value = appointment.location;

        // Atualiza as variáveis globais para edição
        selectedAppointmentIndex = index;
        selectedDate = selectedDate;

        // Altera o texto do botão de adicionar para refletir a edição
        addAppointmentButton.textContent = 'Salvar Edição';
    }

    function deleteAppointment(selectedDate, index) {
        // Remove o compromisso da agenda
        agendaData[selectedDate].splice(index, 1);

        // Atualiza a agenda
        updateAgenda();

        // Salva os compromissos atualizados no localStorage
        saveToLocalStorage();
    }

    function saveToLocalStorage() {
        localStorage.setItem('agendaData', JSON.stringify(agendaData));
    }

    function loadFromLocalStorage() {
        const storedData = localStorage.getItem('agendaData');
        if (storedData) {
            agendaData = JSON.parse(storedData);
        }
    }

    function updateCalendar() {
        renderCalendar(currentDate.getFullYear(), currentDate.getMonth());
        setupDayClickEvent();
    }

    function updateMonth(step) {
        currentDate.setMonth(currentDate.getMonth() + step);
        updateCalendar();
    }

    document.getElementById('prevMonth').addEventListener('click', function () {
        updateMonth(-1);
    });

    document.getElementById('nextMonth').addEventListener('click', function () {
        updateMonth(1);
    });

    addAppointmentButton.addEventListener('click', function () {
        if (addAppointmentButton.textContent === 'Salvar Edição') {
            // Se o botão estiver em modo de edição, salva as alterações
            saveEditedAppointment();
        } else {
            // Caso contrário, adiciona um novo compromisso
            addAppointment();
        }
    });

    function saveEditedAppointment() {
        const date = document.getElementById('appointmentDate').value;
        const time = document.getElementById('appointmentTime').value;
        const location = document.getElementById('appointmentLocation').value;

        // Atualiza o compromisso na agenda
        if (!agendaData[selectedDate]) {
            agendaData[selectedDate] = [];
        }

        agendaData[selectedDate][selectedAppointmentIndex] = {
            date,
            time,
            location
        };

        // Limpa os campos do formulário e reinicia o botão de adicionar
        appointmentForm.reset();
        addAppointmentButton.textContent = 'Adicionar Compromisso';

        // Atualiza a agenda
        updateAgenda();

        // Salva os compromissos atualizados no localStorage
        saveToLocalStorage();
    }

    loadFromLocalStorage();
    updateCalendar();
    updateAgenda(); // Exibe compromissos ao carregar a página
});
