import React from 'react'
import AdminCartTable from './AdminCartTable'

export default function AdminCart() {
  return (
    <div>

      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <button className="nav-link active" id="nav-a-tab" data-bs-toggle="tab" data-bs-target="#nav-a" type="button" role="tab" aria-controls="a" aria-selected="true">A</button>

          <button className="nav-link" id="nav-b-tab" data-bs-toggle="tab" data-bs-target="#nav-b" type="button" role="tab" aria-controls="b" aria-selected="false">B</button>

          <button className="nav-link" id="nav-c-tab" data-bs-toggle="tab" data-bs-target="#nav-c" type="button" role="tab" aria-controls="c" aria-selected="false">C</button>
        </div>
      </nav>

      <div className="tab-content" id="nav-tabContent">
        <div className="tab-pane fade show active" id="nav-a" role="tabpanel" aria-labelledby="nav-a-tab">
          {/* Tab Content Start */}
          <AdminCartTable />
          {/* Tab Content end */}
        </div>
        <div className="tab-pane fade" id="nav-b" role="tabpanel" aria-labelledby="nav-b-tab">
          {/* Tab Content Start */}
          <AdminCartTable />
          {/* Tab Content end */}
        </div>
        <div className="tab-pane fade" id="nav-c" role="tabpanel" aria-labelledby="nav-c-tab">
          {/* Tab Content Start */}
          <AdminCartTable />
          {/* Tab Content end */}
        </div>
      </div>

    </div>
  )
}
