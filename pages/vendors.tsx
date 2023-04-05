const Vendors = (props: any) => {
  return (
    <>
      <div className="vendors">
        <div className="hero">
          <h1>All Vendors</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            eaque exercitationem consequatur, qui reiciendis ut, officiis
            quibusdam dolorem facilis minima rem soluta aut. Saepe provident,
            illo quis inventore doloremque eveniet eaque facilis quidem neque ea
            iure consequatur iste reprehenderit cupiditate.
          </p>
        </div>
        <ul>
          {props.vendors?.map(
            (element: { company_name: string; id: string }) => (
              <li className="vendor_li">
                <a href={element.id}> {element.company_name}</a>
              </li>
            )
          )}
        </ul>
      </div>
    </>
  );
};

export default Vendors;
