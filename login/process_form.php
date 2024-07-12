<?php
    // Ambil data dari formulir
    $username = $_POST['username'];
    $password = $_POST['password'];
    $birthdate = $_POST['birthdate'];
    $origin = $_POST['origin'];
    $status = $_POST['status'];

    // Simpan data dalam array
    $data = array(
        'username' => $username,
        'password' => $password,
        'birthdate' => $birthdate,
        'origin' => $origin,
        'status' => $status
    );

    // Fungsi untuk menulis data ke file teks
    function writeToTxt($data) {
        $file = fopen('data.txt', 'a+');
        $current = file_get_contents($file);
        $current .= "Username: " . $data['username'] . "\n";
        $current .= "Password: " . $data['password'] . "\n";
        $current .= "Tanggal Lahir: " . $data['birthdate'] . "\n";
        $current .= "Asal Anda: " . $data['origin'] . "\n";
        $current .= "Status Anda: " . $data['status'] . "\n";
        $current .= "-------------------------\n";
        $file = fopen('data.txt', 'a+');
        fwrite($file, $data);
    }

    // Panggil fungsi untuk menulis data ke file teks
    writeToTxt($data);

    // Redirect kembali ke formulir atau ke halaman sukses
    header("Location: index.html");
?>
