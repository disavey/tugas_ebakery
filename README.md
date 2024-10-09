# Sistem Manajemen Toko Kue
- Deskripsi
Sistem Manajemen Toko Kue ini dirancang untuk mengelola penjualan kue, transaksi, ulasan dari pelanggan, serta mengatur data chef dan pengguna. Sistem ini membantu toko kue untuk memantau penjualan, mengelola menu kue, menilai performa chef berdasarkan ulasan, serta memberikan pengalaman pelanggan yang lebih baik melalui ulasan kue.

- Fitur Utama
Pengelolaan Kue: Admin dapat menambahkan, mengedit, dan menghapus informasi kue yang dijual di toko.
Manajemen Transaksi: Sistem mencatat semua transaksi pembelian kue dari pengguna.
Review Kue: Pengguna dapat memberikan ulasan terhadap kue yang mereka beli.
Pengelolaan Chef: Admin dapat menambahkan dan mengelola informasi chef yang bertanggung jawab atas pembuatan kue.
Manajemen Pengguna: Pengguna dapat mendaftar, melakukan login, dan melakukan pembelian melalui sistem.
Desain Basis Data
Sistem ini menggunakan beberapa tabel utama:

- Cake: Menyimpan informasi kue yang dijual.
- Transaksi: Mencatat setiap transaksi pembelian kue oleh pengguna.
- Review: Menyimpan ulasan pelanggan terhadap kue yang dibeli.
- Chef: Menyimpan informasi tentang chef yang membuat kue.
- User: Menyimpan informasi pengguna yang mendaftar di sistem.

# Relasi Antar Tabel
- Cake & Chef: Relasi Many-to-One. Satu chef dapat membuat banyak kue, namun satu kue hanya dapat dibuat oleh satu chef.
- Transaksi & User: Relasi Many-to-One. Satu pengguna dapat melakukan banyak transaksi, tapi satu transaksi hanya dilakukan oleh satu pengguna.
- Transaksi & Cake: Relasi Many-to-One. Satu transaksi melibatkan satu jenis kue, namun satu kue bisa dibeli dalam banyak transaksi.
- Review & User: Relasi Many-to-One. Satu pengguna bisa memberikan banyak ulasan, namun satu ulasan hanya diberikan oleh satu pengguna.
- Review & Cake: Relasi Many-to-One. Satu kue bisa menerima banyak ulasan dari berbagai pengguna.