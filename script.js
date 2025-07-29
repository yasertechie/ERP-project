// Dummy student data
const students = [
  {
    regNo: "12345",
    password: "yaser123",
    name: "Yaser Arafath M",
    dept: "CSBS",
    year: "2nd Year",
    attendance: {
      Maths: 85,
      DSA: 78,
      Python: 68,
      WebDev: 82
    },
    fees: {
      total: 60000,
      paid: 45000,
      pending: 15000
    }
  },
  {
    regNo: "12346",
    password: "imran123",
    name: "Mohamed imran",
    dept: "CSBS",
    year: "2nd Year",
    attendance: {
      Maths: 90,
      DSA: 88,
      Python: 80,
      WebDev: 85
    },
    fees: {
      total: 60000,
      paid: 59800,
      pending: 200
    }
  },
  {
    regNo: "12347",
    password: "thoufiq123",
    name: "Mohamed thoufiq",
    dept: "CSBS",
    year: "2nd Year",
    attendance: {
      Maths: 64,
      DSA: 70,
      Python: 75,
      WebDev: 72
    },
    fees: {
      total: 60000,
      paid: 30000,
      pending: 30000
    }
  }
];

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const regNo = document.getElementById("regNo").value;
  const password = document.getElementById("password").value;

  const student = students.find(
    (s) => s.regNo === regNo && s.password === password
  );

  if (student) {
    localStorage.setItem("loggedInStudent", JSON.stringify(student));
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid Register Number or Password");
  }
});
