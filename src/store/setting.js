import { action, computed, thunk } from "easy-peasy";

const setting = {
  users: [],
  tables: [],
  counters: [],
  storeID: 0,
  oneID: 0,
  /* Thunks */
  // fetchTodos: thunk(async (actions) => {
  //     const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
  //     const todos = await res.json();

  //     actions.setTodos(todos);
  // }),
  /* Actions */

  setOneID: action((state, id) => {
    state.oneID = id;
  }),

  setStoreID: action((state, id) => {
    state.storeID = id;
  }),

  // users
  setUser: action((state, users) => {
    state.users = users;
  }),
  addUser: action((state, user) => {
    state.users = [...state.users, user];
  }),

  removeUser: action((state, id) => {
    state.users = state.users.filter((user) => user.node.VenueStaff.ID !== id);
  }),
  editUser: action((state, data) => {
    state.users.find((t, i) => {
      console.log(t.node.VenueStaff.ID, "t.id");
      console.log(data.ID, "data.ID");
      if (t.node.VenueStaff.ID == data.ID) {
        t.node.VenueStaff.ID = data.ID;
        t.node.VenueStaff.Email = data.Email;
        t.node.VenueStaff.FirstName = data.FirstName;
        return true;
      }
    });
  }),

  // tables
  setTable: action((state, tables) => {
    state.tables = tables;
  }),
  addTable: action((state, table) => {
    state.tables = [...state.tables, table];
  }),

  removeTable: action((state, id) => {
    state.tables = state.tables.filter((table) => table.id !== id);
  }),

  editTable: action((state, data) => {
    state.tables.find((t, i) => {
      if (t.id == data.ID) {
        t.tableNumber = data.TableNumber;
        t.sittingArea = data.SittingArea;
        t.seats = data.NumberOfSeats;
        return true;
      }
    });
  }),

  // counters
  setCounter: action((state, counters) => {
    state.counters = counters;
  }),
  addCounter: action((state, counter) => {
    state.counters = [...state.counters, counter];
  }),

  removeCounter: action((state, id) => {
    state.counters = state.counters.filter(
      (counter) => counter.node.VenueStaff.ID !== id
    );
  }),

  logoutAction: action((state) => {
    localStorage.clear();
  }),
};

export default setting;
