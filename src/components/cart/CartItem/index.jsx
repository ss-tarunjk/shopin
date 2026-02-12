import { useState } from "react";

import IconButton from "../../common/IconButton/IconButton";
import { ReactComponent as BinIcon } from "../../../assets/icons/bin.svg";

export default function CartItem() {
  const [count, setCount] = useState(1);

  return (
    <article>
      <div className="flex">
        <img src="/images/products/product1.png" alt="Image" />
        <div>
          <h3>GG</h3>
          <p>Size: Large</p>
          <p>Color: White</p>

          <h2>$180</h2>
        </div>
      </div>
      <div>
        <IconButton
          title="Remove"
          icon={<BinIcon width={18} height={19.5} />}
          onClick={() => {}}
        />

        <div>
          <button>-</button> 1 <button>+</button>
        </div>
      </div>
    </article>
  );
}
