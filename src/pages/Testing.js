import React from 'react'
import TagBox from '../components/box/TagBox'
import AddDataBtn from '../components/button/AddDataBtn'
import BackBtn from '../components/button/BackBtn'
import DeleteBtn from '../components/button/DeleteBtn'
import EditBtn from '../components/button/EditBtn'
import FilterBtn from '../components/button/FilterBtn'
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
        <FilterBtn/>
        <DeleteBtn/>
        <EditBtn/>
    </div>
  )
}
