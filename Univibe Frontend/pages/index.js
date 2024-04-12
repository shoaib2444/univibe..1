import Header from "@/components/Header";
import Featured from "@/components/Featured";
import {Product} from "@/models/Product";
import {mongooseConnect} from "@/lib/mongoose";
import NewProducts from "@/components/NewProducts";


//Front page is designed here 
//header added,Featured,......
export default function HomePage({featuredProduct},newProducts){
    return (
        <div>
        <Header/>
        <Featured product={featuredProductroduct}/>
        <NewProducts products ={newProducts} />
        </div>
    );
}



//Fetches Detail from database
// async await fumction
export async function getServerSideProps() {
    const featuredProductId = '640de2b12aa291ebdf213d48';
    await mongooseConnect();
    const featuredProduct = await Product.findById(featuredProductId);

    // filter what kind of price,by default no filter,sort is done by id in decending order show that last product is first
    const newProducts = await Product.find({}, null, {sort: {'_id':-1}, limit:10});
    return {
      props: {
        //mongoose files are not compatoble with json therefore stringify is done 
        featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
        newProducts: JSON.parse(JSON.stringify(newProducts)),
      },
    };
  }