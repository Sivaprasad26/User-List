import UserProfile from './components/UserProfile'

import './App.css'

const userDetailsList = [
  {
    uniqueNo: 1,
    imageUrl:
      'https://res.cloudinary.com/civaprasad/image/upload/v1668855354/IMG_20200913_175240_d1qdcz.jpg',
    name: 'Sivaprasad',
    role: 'Software Developer',
  },
  {
    uniqueNo: 2,
    imageUrl:
      'https://res.cloudinary.com/civaprasad/image/upload/v1674347220/IMG20200521193338_w6uc8w.jpg',
    name: 'Bhargavi',
    role: 'Full Stack Developer',
  },
  {
    uniqueNo: 3,
    imageUrl:
      'https://res.cloudinary.com/civaprasad/image/upload/v1674347350/1606894582835_ghsde8.jpg',
    name: 'Sivaprasad.K',
    role: 'Developer',
  },
  {
    uniqueNo: 4,
    imageUrl:
      'https://res.cloudinary.com/civaprasad/image/upload/v1674347463/IMG_20210521_001710_eyz1s1.jpg',
    name: 'Bhargavi.O',
    role: 'Frontend Developer',
  },
]

const App = () => (
  <div className="list-container">
    <h1 className="title">User List</h1>
    <ul>
      {userDetailsList.map(eachItem => (
        <UserProfile userDetails={eachItem} key={eachItem.uniqueNo} />
      ))}
    </ul>
  </div>
)

export default App
