import React,{useState} from 'react'
import './Sortdata.css'

function SortData() {
    const [data,setData]=useState([
        {
            "id": 1,
            "name": "Alice",
            "age": 30,
            "email": "alice@example.com",
            "salary": 30000,
            "order":2,
            "totalSepet" : 23000,
            "gender": "male",
            "lastSeen": "10-11-2015"
        },
        {
            "id": 2,
            "name": "Bob",
            "age": 25,
            "email": "bob@example.com",
            "salary": 32300,
            "order":5,
            "totalSepet" : 2300,
            "gender": "male",
            "lastSeen": "11-10-2017"
        },
        {
            "id": 3,
            "name": "Charlie",
            "age": 28,
            "email": "charlie@example.com",
            "salary": 2000,
            "order":6,
            "totalSepet" : 23300,
            "gender": "male",
            "lastSeen": "09-02-2005"
        },
        {
            "id": 4,
            "name": "David",
            "age": 35,
            "email": "david@example.com",
            "salary": 3030,
            "order":9,
            "totalSepet" : 200,
            "gender": "male",
            "lastSeen": "07-09-2018"
        },
        {
            "id": 5,
            "name": "Eva",
            "age": 22,
            "email": "eva@example.com",
            "salary": 9000,
            "order":0,
            "totalSepet" : 2500,
            "gender": "female",
            "lastSeen": "10-01-2018"
        },
        {
            "id": 6,
            "name": "Frank",
            "age": 31,
            "email": "frank@example.com",
            "salary": 30123,
            "order":1,
            "totalSepet" : 23000,
            "gender": "male",
            "lastSeen": "09-08-2011"
        },
        {
            "id": 7,
            "name": "Grace",
            "age": 27,
            "email": "grace@example.com",
            "salary": 6000,
            "order":6,
            "totalSepet" : 3000,
            "gender": "female",
            "lastSeen": "12-11-2016"
        },
        {
            "id": 8,
            "name": "Henry",
            "age": 29,
            "email": "henry@example.com",
            "salary": 12000,
            "order":4,
            "totalSepet" : 2300,
            "gender": "male",
            "lastSeen": "04-11-2011"
        }
    ])

    const [search,setSearch]=useState("")
    const [gender, setGender] = useState('');
    const [lastseen, setLastseen] = useState('');
    console.log(data);

    const handleSearch = (e) => {
        setSearch(e.target.value);
      
        const filteredData = data.filter((item) =>
          item.name.toLowerCase().includes(e.target.value)
        );
        setData(filteredData);
      };
      const handleGender = (e) => {
       
        setGender(e.target.value);
        const filteredGender = e.target.value === '' ? data : data.filter((item) => item.gender === e.target.value);
        setData(filteredGender);
      };

      const handleLastseen = (e) => {
        setLastseen(e.target.value);
        const filteredLastseen = e.target.value === "" ? data : data.filter ((item) => {
            return item.lastSeen.includes(e.target.value);
        }); 
        setData(filteredLastseen)
      }
    
    
  return (
    <>
    <div className='main'>

  
    <div className='box'>

        <input type="text" 
        placeholder='Search...'
        value={search}
        onChange={handleSearch}
        />
        
        <label htmlFor="">Gender</label>
        <select name="gender" id="gender"
         onChange={handleGender} 
        value={gender}>
        
        <option value="">select gender</option>
        <option value="all">All</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        </select>
       

        <label htmlFor="">Active last</label>
        <select name="active" id=""
         onChange={handleLastseen}
         value={lastseen}>
        <option value="">select year</option>
        <option value="All years">All years</option>
        <option value="2005">2005</option>
        <option value="2011">2011</option>
        <option value="2015">2015</option>
        <option value="2016">2016</option>
        <option value="2017">2017</option>
        <option value="2018">2018</option>
        </select>
            
        
    </div>


    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Salary</th>
            <th>Order</th>
            <th>Last Seen</th>
            <th>Total Sepet</th>

          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.age}</td>
              <td>{row.gender}</td>
              <td>{row.email}</td>
              <td>{row.salary}</td>
              <td>{row.order}</td>
              <td>{row.lastSeen}</td>
              <td>{row.totalSepet}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    </>
  )
}

export default SortData