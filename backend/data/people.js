import { v4 as uuidv4 } from 'uuid'

const peopleStore = () => {
  const people = {
    '1': {
      name: 'Jhon',
      age: 10
    },

    '2': {
      name: 'Mary',
      age: 15
    }
  }

  const getAll = () => {
    return people
  }

  const getById = (id) => {
    return people[id]
  }

  const add = (person) => {
    const id = uuidv4()
    people[id] = {
      id,
      ...person
    }

    return people[id]
  }

  const remove = (id) => {
    delete people[id]
  }

  const edit = (id, data) => {
    people[id] = {
      id,
      ...data
    }

    return people[id]
  }

  return {
    getAll,
    getById,
    add,
    remove,
    edit
  }
}

export const people = peopleStore();