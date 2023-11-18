"use client"
import React, { useState } from 'react'
import Link from 'next/link';
import './menus.css';
import {usePathname } from "next/navigation";
export default function SideBar() {
  const pathname = usePathname();
  console.log(pathname);
  
  let links = [{
    name:'客户列表',
    url:'/dashboard/customers',
    id:1
  },
  {
    name:'发表列表',
    url:'/dashboard/invoices',
    id:2
  }
];
  return (
    <div style={{width:'200px',border:'1px solid blue'}}>
     
     <h2 style={{fontSize:'16px',padding:'10px',fontWeight:'bold'}}>菜单</h2> 
    <div className="menus">
      {links.map((item)=>{
        return <Link key={item.id} href={item.url} className={pathname==item.url?'actived':''}>{item.name}</Link>
      })}
    </div>
    </div>
  )
}
