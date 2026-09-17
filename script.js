const form = document.getElementById("appointmentForm");
const table = document.getElementById("appointmentTable");
const searchInput = document.getElementById("searchInput");

let appointments = [];

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const appointment = {
        id: Date.now(),

        patientName:
            document.getElementById("patientName").value,

        email:
            document.getElementById("email").value,

        phone:
            document.getElementById("phone").value,

        department:
            document.getElementById("department").value,

        doctor:
            document.getElementById("doctor").value,

        date:
            document.getElementById("date").value,

        time:
            document.getElementById("time").value
    };

    appointments.push(appointment);

    displayAppointments();

    form.reset();

    alert("Appointment booked successfully!");
});


function displayAppointments(data = appointments) {

    table.innerHTML = "";

    if (data.length === 0) {

        table.innerHTML = `
            <tr>
                <td colspan="6" style="text-align:center;">
                    No appointments found
                </td>
            </tr>
        `;

        return;
    }

    data.forEach(function(appointment) {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${appointment.patientName}</td>

            <td>${appointment.department}</td>

            <td>${appointment.doctor}</td>

            <td>${appointment.date}</td>

            <td>${appointment.time}</td>

            <td>
                <button
                    class="delete-btn"
                    onclick="deleteAppointment(${appointment.id})">
                    Delete
                </button>
            </td>
        `;

        table.appendChild(row);
    });
}


function deleteAppointment(id) {

    const confirmDelete =
        confirm("Are you sure you want to cancel this appointment?");

    if (!confirmDelete) {
        return;
    }

    appointments =
        appointments.filter(function(appointment) {
            return appointment.id !== id;
        });

    displayAppointments();
}


searchInput.addEventListener("input", function() {

    const searchValue =
        searchInput.value.toLowerCase();

    const filteredAppointments =
        appointments.filter(function(appointment) {

            return appointment.patientName
                .toLowerCase()
                .includes(searchValue);

        });

    displayAppointments(filteredAppointments);
});
