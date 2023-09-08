import { Link } from "react-router-dom";
import { string } from 'prop-types'

function FooterItem({ image }) {
  return (
    <>
      <Link
        className="btn btn-floating btn-light text-dark m-1"
        role="button"
        data-mdb-ripple-color="dark"
      >
        <img src={image} width="40px" alt="" />
      </Link>
    </>
  );
}

FooterItem.propTypes = {
  image: string.isRequired
}

export default FooterItem
