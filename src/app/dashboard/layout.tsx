import React from 'react'

import SideBar from '@/components/SideBar'
import styles from './test.module.css'
export default function Layout({children}:any) {

  return (


    <div className={styles['dash-outer']}> 
        
        <SideBar></SideBar>

        <div className='content'>  {children}  </div>
    </div>
  )
}



