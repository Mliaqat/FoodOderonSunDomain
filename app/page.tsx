"use client";
import { useEffect, useState } from "react";

const sampleOrders: any = {
  daraz: [
    {
      orderId: 101,
      customerName: "Alice",
      amount: "$120",
      status: "Delivered",
    },
    { orderId: 102, customerName: "Bob", amount: "$85", status: "Shipped" },
    { orderId: 103, customerName: "Cathy", amount: "$150", status: "Pending" },
    {
      orderId: 104,
      customerName: "Daniel",
      amount: "$200",
      status: "Cancelled",
    },
    { orderId: 105, customerName: "Eva", amount: "$95", status: "Delivered" },
    {
      orderId: 106,
      customerName: "Frank",
      amount: "$50",
      status: "In Transit",
    },
    { orderId: 107, customerName: "Grace", amount: "$120", status: "Shipped" },
    { orderId: 108, customerName: "Hank", amount: "$300", status: "Delivered" },
  ],
  foodpanda: [
    {
      orderId: 201,
      customerName: "Charlie",
      amount: "$50",
      status: "Delivered",
    },
    { orderId: 202, customerName: "David", amount: "$25", status: "Preparing" },
    { orderId: 203, customerName: "Irene", amount: "$45", status: "Cancelled" },
    { orderId: 204, customerName: "James", amount: "$70", status: "Shipped" },
    { orderId: 205, customerName: "Kim", amount: "$30", status: "Delivered" },
    { orderId: 206, customerName: "Larry", amount: "$85", status: "Pending" },
    { orderId: 207, customerName: "Mona", amount: "$60", status: "Delivered" },
    { orderId: 208, customerName: "Nate", amount: "$90", status: "In Transit" },
  ],
  amazon: [
    { orderId: 301, customerName: "Eve", amount: "$200", status: "In Transit" },
    { orderId: 302, customerName: "Frank", amount: "$150", status: "Pending" },
    {
      orderId: 303,
      customerName: "Olivia",
      amount: "$300",
      status: "Delivered",
    },
    { orderId: 304, customerName: "Paul", amount: "$250", status: "Cancelled" },
    {
      orderId: 305,
      customerName: "Quinn",
      amount: "$180",
      status: "Delivered",
    },
    { orderId: 306, customerName: "Rachel", amount: "$90", status: "Shipped" },
    {
      orderId: 307,
      customerName: "Steve",
      amount: "$120",
      status: "Delivered",
    },
    { orderId: 308, customerName: "Tina", amount: "$400", status: "Pending" },
    { orderId: 309, customerName: "Uma", amount: "$75", status: "Delivered" },
  ],
};

const OrdersPage = () => {
  const [subdomain, setSubdomain] = useState("");
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get the subdomain from the window location (hostname)
    const currentSubdomain = window.location.hostname.split(".")[0];
    setSubdomain(currentSubdomain);

    // Simulate data fetching with a delay
    setTimeout(() => {
      const fetchedOrders = sampleOrders[currentSubdomain] || [];
      setOrders(fetchedOrders);
      setLoading(false);
    }, 1000); // Simulate a 1-second delay
  }, []);

  console.log(orders, "orders");

  return (
    <div className="p-5">
      {loading ? (
        <div className="flex flex-col justify-center items-center  py-5">
          <div className="loader" />
          <p className="mt-4">Loading orders...</p>
        </div> // Loading message or spinner
      ) : (
        <>
          <h1 className="text-center font-bold my-4">Orders for {subdomain}</h1>
          <table className="w-full">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer Name</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.length > 0 ? (
                orders.map((order: any) => (
                  <tr key={order.orderId}>
                    <td>{order.orderId}</td>
                    <td>{order.customerName}</td>
                    <td>{order.amount}</td>
                    <td>{order.status}</td>
                  </tr>
                ))
              ) : (
                <div>
                  <p>You have no Order!</p>
                </div>
              )}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default OrdersPage;
