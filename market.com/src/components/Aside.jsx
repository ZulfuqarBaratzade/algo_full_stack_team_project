import React from 'react'
import '../styles/Aside.css'
function Aside() {
  return (
    <div>
        <div className="aside-sec">
            <ul>
                <li className='allCategory'><a href="#" ><i class="fa-solid fa-bars"></i> Butun Kategoriyalar</a></li>
                <li><a href="#"><i class="fa-solid fa-arrow-right"></i>🍉Meyve, Terevez<i class="fa-solid fa-angle-right"></i></a></li>
                <li><a href="#"><i class="fa-solid fa-arrow-right"></i>🍗Et-Toyuq, Baliq<i class="fa-solid fa-angle-right"></i></a></li>
                <li><a href="#"><i class="fa-solid fa-arrow-right"></i>🥛Sud, Seher Yemeyi<i class="fa-solid fa-angle-right"></i></a></li>
                <li><a href="#"><i class="fa-solid fa-arrow-right"></i>🚬Tutun Mehsullari<i class="fa-solid fa-angle-right"></i> </a></li>
                <li><a href="#"><i class="fa-solid fa-arrow-right"></i>👶Usaq Dunyasi<i class="fa-solid fa-angle-right"></i></a></li>
            </ul>
        </div>
    </div>
  )
}

export default Aside