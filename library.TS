class Book {
    title: string;
    author: string;
    isAvailable: boolean;

    constructor(title: string, author: string, isAvailable: boolean = true) {
        this.title = title;
        this.author = author;
        this.isAvailable = isAvailable;
    }

    displayInfo(): void {
        console.log(`${this.title} by ${this.author} - ${this.isAvailable ? "Available" : "Checked out"}`);
    }
}

class Library {
    books: Book[];

    constructor() {
        this.books = [];
    }

    addBook(book: Book): void {
        this.books.push(book);
    }

    checkOutBook(title: string): void {
        for (let book of this.books) {
            if (book.title === title && book.isAvailable) {
                book.isAvailable = false;
                console.log(`You have checked out "${book.title}" by ${book.author}`);
                return;
            }
        }
        console.log(`Book "${title}" is not available or not found.`);
    }

    returnBook(title: string): void {
        for (let book of this.books) {
            if (book.title === title && !book.isAvailable) {
                book.isAvailable = true;
                console.log(`You have returned "${book.title}" by ${book.author}`);
                return;
            }
        }
        console.log(`Book "${title}" was not found in checked-out list.`);
    }

    showInventory(): void {
        console.log("Library Inventory:");
        for (let book of this.books) {
            book.displayInfo();
        }
    }
}

// Buat perpustakaan dan tambahkan buku
let library = new Library();
let book1 = new Book("To Kill a Mockingbird", "Harper Lee");
let book2 = new Book("1984", "George Orwell");
let book3 = new Book("The Great Gatsby", "F. Scott Fitzgerald");

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

// Tampilkan daftar buku yang tersedia
library.showInventory();

// Meminjam buku
library.checkOutBook("1984");
library.showInventory();

// Mengembalikan buku
library.returnBook("1984");
library.showInventory();


// Reservasi Hotel 
// Membeli hotel dengan harga sewa
// Menginap di hotel dengan jumlah yang di tetapkan
// Checkout sesuai dengan Tanggal yang berlaku


class Room {
    roomNumber: number;
    roomType: string;
    isAvailable: boolean;

    constructor(roomNumber: number, roomType: string, isAvailable: boolean = true) {
        this.roomNumber = roomNumber;
        this.roomType = roomType;
        this.isAvailable = isAvailable;
    }

    displayInfo(): void {
        console.log(`Room ${this.roomNumber} (${this.roomType}) - ${this.isAvailable ? "Available" : "Occupied"}`);
    }
}

class Hotel {
    rooms: Room[];

    constructor() {
        this.rooms = [];
    }

    addRoom(room: Room): void {
        this.rooms.push(room);
    }

    bookRoom(roomNumber: number): void {
        for (let room of this.rooms) {
            if (room.roomNumber === roomNumber && room.isAvailable) {
                room.isAvailable = false;
                console.log(`Room ${room.roomNumber} (${room.roomType}) has been booked.`);
                return;
            }
        }
        console.log(`Room ${roomNumber} is not available or does not exist.`);
    }

    releaseRoom(roomNumber: number): void {
        for (let room of this.rooms) {
            if (room.roomNumber === roomNumber && !room.isAvailable) {
                room.isAvailable = true;
                console.log(`Room ${room.roomNumber} (${room.roomType}) has been released.`);
                return;
            }
        }
        console.log(`Room ${roomNumber} is not currently booked.`);
    }

    showAvailableRooms(): void {
        console.log("Available Rooms:");
        for (let room of this.rooms) {
            if (room.isAvailable) {
                room.displayInfo();
            }
        }
    }
}

// Buat hotel dan tambahkan kamar
let hotel = new Hotel();
let room1 = new Room(101, "Single");
let room2 = new Room(102, "Double");
let room3 = new Room(103, "Suite");

hotel.addRoom(room1);
hotel.addRoom(room2);
hotel.addRoom(room3);

// Tampilkan kamar yang tersedia
hotel.showAvailableRooms();

// Memesan kamar
hotel.bookRoom(102);
hotel.showAvailableRooms();

// Mengosongkan kamar
hotel.releaseRoom(102);
hotel.showAvailableRooms();


