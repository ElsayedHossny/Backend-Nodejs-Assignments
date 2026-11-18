interface Iuser {
  id: number;
  name: string;
  email: string;
  password: string;
  phone: string;
  age: number;
}

class User {
  private userNoteBooks: NoteBook[] = [];
  constructor(
    private id: number,
    public name: string,
    public email: string,
    private password: string,
    protected phone: string,
    public age: number,
  ) {}
  displayInfo(): Iuser {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      password: this.password,
      phone: this.phone,
      age: this.age,
    };
  }
  createNoteBook(noteBook: NoteBook): void {
    this.userNoteBooks.push(noteBook);
  }
  removeNoteBook(noteBookId: number): void {
    this.userNoteBooks = this.userNoteBooks.filter((noteBook) => {
      return noteBook.id !== noteBookId;
    });
  }
  displayNoteBooks(): NoteBook[] {
    return this.userNoteBooks;
  }
}

class Admin extends User {
  constructor(
    id: number,
    name: string,
    email: string,
    password: string,
    phone: string,
    age: number,
  ) {
    super(id, name, email, password, phone, age);
    // console.log(this.phone);
  }

  manageNotes(): string {
    return `${this.name} is admin and managing notes.`;
  }
}

class Note {
  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }
  constructor(
    private _id: number,
    public title: string,
    public content: string,
    public userId: User,
    public author?: User,
  ) {}
  preview(): string {
    return this.content.length > 25
      ? this.content.slice(0, 20) + "..."
      : this.content;
  }
}

class NoteBook {
  private notes: Note[] = [];

  constructor(private _id: number) {}

  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }
  // composition NoteBook (parent) and Note (child)

  addNoteComp(id: number, title: string, content: string, user: User): void {
    const newNote = new Note(id, title, content, user);
    this.notes.push(newNote);
  }
  addNoteAgg(newNote: Note): void {
    this.notes.push(newNote);
  }
  removeNote(noteId: number): void {
    this.notes = this.notes.filter((note) => {
      return note.id !== noteId;
    });
  }
  displayNotes(): Note[] {
    return this.notes;
  }
}

class Storage<T> {
  private Items: T[] = [];
  constructor(public item: T) {
    this.Items.push(item);
  }
  addItem(item: T): void {
    this.Items.push(item);
  }
  removeItem(itemRemove: T): void {
    this.Items = this.Items.filter((item) => item !== itemRemove);
  }
  getAllItems(): T[] {
    return this.Items;
  }
}

const Books = new Storage<string>("sayed");
const Numbers = new Storage<number>(88);

Books.addItem("sasass");
Numbers.addItem(90);

console.log(Books.getAllItems());
console.log(Numbers.getAllItems());

const user = new User(
  1,
  "sayed",
  "sayed@gmail.com",
  "12345",
  "01094917977",
  24,
);

const noteBookCom = new NoteBook(90);

noteBookCom.addNoteComp(
  1,
  "sa",
  "This is my note content, Elsayed hossny Elsayed ",
  user,
);
noteBookCom.addNoteComp(
  1,
  "sa",
  "This is my note content, Elsayed hossny Elsayed ",
  user,
);

// console.log("sassa");

// user.createNoteBook(noteBookCom);

// console.log(user.displayNoteBooks());

const userAdmin = new Admin(
  2,
  "habiba",
  "habiba@gmail.com",
  "12345",
  "01226485989",
  20,
);

const note = new Note(
  1,
  "sa",
  "This is my note content, Elsayed hossny Elsayed ",
  user,
);

const note2 = new Note(
  2,
  "sa",
  "This is my note content, Elsayed hossny Elsayed ",
  user,
);

// const noteBookCom = new NoteBook(90);

// noteBookCom.addNoteComp(1, "wertyuio", "awsedrftgyhuijok", userAdmin);

// console.log(noteBookCom);

// const noteBook = new NoteBook(1);
// const noteBook2 = new NoteBook(2);
// noteBook.addNoteAgg(note2);
// console.log(noteBook.notes);
// console.log("noteBook1", noteBook);

// console.log("noteBook2", noteBook2);

// console.log(user.displayIbfo());
// console.log(user);

// console.log(userAdmin.displayIbfo());

// console.log(note.preview());
