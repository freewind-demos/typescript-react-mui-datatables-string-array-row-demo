import React from 'react'
import MUIDataTable from "mui-datatables";

export default function Hello() {
  return <MUIDataTable
    title={"Employee List"}
    data={[
      ["Joe James", "Test Corp", "Yonkers", "NY"],
      ["John Walsh", "Test Corp", "Hartford", "CT"],
      ["Bob Herm", "Test Corp", "Tampa", "FL"],
      ["James Houston", "Test Corp", "Dallas", "TX"],
    ]}
    columns={["Name", "Company", "City", "State"]}
    options={{
      filterType: 'checkbox',
    }}
  />
}
