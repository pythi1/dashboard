import Tab from '../components/tabs/dasboardtabs.jsx';
import Linechart from '../components/charts/linechart/linechart.jsx';
import Barchart from '../components/charts/barchart/barchart.jsx';
import Table from '../components/table/page.jsx';


export default function DashboardPage() {
  return (
    <div className='ml-5 mt-5 min-h-screen right-0 dashboard' >

      <Tab />

      <div className='grid lg:grid-cols-2 md:grid-cols-1' >
        <div  >
          <Linechart />
        </div>

        <div >
          <Barchart />
        </div>

      </div>

      <div>
        <Table />
      </div>


    </div>

  )
}
