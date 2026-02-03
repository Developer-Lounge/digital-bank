'use client'
import Image from 'next/image'
import React from 'react'
import styles from './Navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
  return (
    // logo
    <main className={styles.nav}>
        <div className={styles.navImg}><Image src="/logo-dark.svg" alt="Logo" width={190} height={400} /></div>

    {/* links */}

        <div className={styles.navLinks}>
            <Link className={styles.navLinks1} href="#" style={{marginRight: '20px', textUnderlineOffset: '18px', color: '#bcbcbc'}}>Home</Link>
            <Link className={styles.navLinks2} href="#" style={{marginRight: '20px', textUnderlineOffset: '18px', color: '#bcbcbc'}}>About</Link>
            <Link className={styles.navLinks3} href="#" style={{marginRight: '20px', textUnderlineOffset: '18px',  color: '#bcbcbc'}}>Contact</Link>
            <Link className={styles.navLinks4} href="#" style={{marginRight: '20px', textUnderlineOffset: '18px', color: '#bcbcbc'}}>Blog</Link>
            <Link className={styles.navLinks5} href="#" style={{ textUnderlineOffset: '18px', color: '#bcbcbc'}}>Careers</Link>
        </div>

        {/* Request invite button */}
        <div className={styles.requestInvite}>
            <button className={styles.btn}>Request Invite</button>
        </div>

    </main>
  )
}

export default Navbar