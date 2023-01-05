import React from 'react'
import TagBox from '../components/box/TagBox'
import AddDataBtn from '../components/button/AddDataBtn'
import BackBtn from '../components/button/BackBtn'
import SaveBtn from '../components/button/SaveBtn'
import ReadTime from '../components/icon/ReadTime'

export const Testing = () => {
  return (
    <div>
        <h1>Dummy Page just for Testing components</h1>
        <TagBox/>
        <BackBtn/>
        <ReadTime minutes="2"/>
        <SaveBtn/>
        <AddDataBtn/>
    </div>
  )
}
