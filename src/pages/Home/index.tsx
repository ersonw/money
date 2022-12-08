import React from 'react'
import Banner from "@/components/Banner"
import styles from './index.less';
export default function Home() {
  return (
    <div className={styles.box}>
      <Banner />
      <div>
        home
      </div>
    </div>
  )
}
