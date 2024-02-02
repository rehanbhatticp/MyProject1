import React, { useState } from "react";
import { Table, Button, Popconfirm, Modal, Form, Input } from "antd";
const data = [
  {
    id: 1,
    firstname: "Rehan",
    lastname: "Bhatti",
    phone: "+91 789654123",
    email: "rehan123@gmail.com",
  },

  {
    id: 2,
    firstname: "Ali",
    lastname: "Bhai",
    phone: "+91 123456987",
    email: "ali123@gmail.com",
  },
  {
    id: 3,
    firstname: "Ahmed",
    lastname: "Awan",
    phone: "+91 789654123",
    email: "ahmed@gmail.com",
  },
  {
    id: 4,
    firstname: "zain",
    lastname: "Raza",
    phone: "+91 123456987",
    email: "zain123@gmail.com",
  },
  {
    id: 5,
    firstname: "usama",
    lastname: "arshed",
    phone: "+91 789654123",
    email: "usam123@gmail.com",
  },
  {
    id: 6,
    firstname: "Majnu",
    lastname: "Bhai",
    phone: "+91 123456987",
    email: "majnu123@gmail.com",
  },
  {
    id: 7,
    firstname: "Fasih",
    lastname: "Zahid",
    phone: "+91 789654123",
    email: "fasih123@gmail.com",
  },
  {
    id: 8,
    firstname: "Faraz",
    lastname: "Bhai",
    phone: "+91 123456987",
    email: "faraz123@gmail.com",
  },
  {
    id: 9,
    firstname: "Shuja",
    lastname: "Bhai",
    phone: "+91 123456987",
    email: "shuja123@gmail.com",
  },
  {
    id: 10,
    firstname: "Talha",
    lastname: "saleem",
    phone: "+91 123456987",
    email: "faraz123@gmail.com",
  },

  {
    id: 11,
    firstname: "Muneeb",
    lastname: "Bhai",
    phone: "+91 789654123",
    email: "muneeb123123@gmail.com",
  },

  {
    id: 12,
    firstname: "Amir",
    lastname: "Bhai",
    phone: "+91 123456987",
    email: "amir123@gmail.com",
  },
  {
    id: 13,
    firstname: "Sameer",
    lastname: "Bhai",
    phone: "+91 789654123",
    email: "sameer123@gmail.com",
  },
  {
    id: 14,
    firstname: "Zain",
    lastname: "Bhatti",
    phone: "+91 123456987",
    email: "zain123@gmail.com",
  },
  {
    id: 15,
    firstname: "Usman",
    lastname: "BHatti",
    phone: "+91 789654123",
    email: "uman123@gmail.com",
  },
  {
    id: 16,
    firstname: "Umair",
    lastname: "Bhatti",
    phone: "+91 123456987",
    email: "umair123@gmail.com",
  },
  {
    id: 17,
    firstname: "Faisal",
    lastname: "Bajwa",
    phone: "+91 789654123",
    email: "faisal123@gmail.com",
  },
  {
    id: 18,
    firstname: "Saim",
    lastname: "Jutt",
    phone: "+91 123456987",
    email: "saim123@gmail.com",
  },
  {
    id: 19,
    firstname: "Sarmad",
    lastname: "Bhatti",
    phone: "+91 123456987",
    email: "sarmad123@gmail.com",
  },
  {
    id: 20,
    firstname: "Talha",
    lastname: "Abid",
    phone: "+91 123456987",
    email: "talha123@gmail.com",
  },
];

const Comp2 = () => {
  const [userdata, setUserdata] = useState(data);
  const [editingUser, setEditingUser] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [selecteduser, setSelecteduser] = useState({});
  const [form] = Form.useForm();

  //(Modal)------f1
  const showModal = (record) => {
    setEditingUser(record);
    setIsModalOpen(true);

    form.setFieldsValue({
      firstname: record.firstname,
      lastname: record.lastname,
      phone: record.phone,
      email: record.email,
    });
  };

  //------f2
  const handleCancel = () => {
    form.resetFields(); // Reset the form fields
    setIsModalOpen(false);
    setEditingUser({});
  };

  //-------f3
  const handelEdit = (record) => {
    // setEditingUser(record);
    showModal(record);
  };

  //------f4
  const handleUpdate = (values) => {
    const updatedData = userdata.map((user) =>
      user.id === editingUser.id ? { ...user, ...values } : user
    );
    setUserdata(updatedData);
    handleCancel();
  };

  //------f5
  const handleDelete = (recordId) => {
    const mydata = userdata.filter((record) => record.id !== recordId);
    setUserdata(mydata);
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      width: 150,
    },

    {
      title: "FirstName",
      dataIndex: "firstname",
      width: 150,
    },
    {
      title: "LastName",
      dataIndex: "lastname",
      width: 150,
    },
    {
      title: "Phone",
      dataIndex: "phone",
      width: 150,
    },
    {
      title: "Email",
      dataIndex: "email",
    },

    {
      title: "Actions",
      dataIndex: "actions",
      render: (text, record) => (
        <span>
          <Button type="primary" onClick={() => handelEdit(record)}>
            EDIT
          </Button>
          <Modal
            title="UPDATE INFORMATION.."
            visible={isModalOpen && editingUser.id === record.id}
            // onOk={handleOk}
            onCancel={handleCancel}
          >
            <Form
              form={form}
              name="basic"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 16,
              }}
              style={{
                maxWidth: 600,
              }}
              onFinish={handleUpdate}
              // initialValues={{
              //   firstname: editingUser.firstname,
              //   lastname: editingUser.lastname,
              //   phone: editingUser.phone,
              //   email: editingUser.email,
              // }}
            >
              <Form.Item
                label="FirstName"
                name="firstname"
                rules={[
                  {
                    required: true,
                    message: "Please input your FirstName!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="LasttName"
                name="lastname"
                rules={[
                  {
                    required: true,
                    message: "Please input your LastName!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Phone"
                name="phone"
                rules={[
                  {
                    required: true,
                    message: "Please input your Phone!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your EmailId!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  Update
                </Button>
              </Form.Item>
            </Form>
          </Modal>

          <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this task?"
            okText="Yes"
            cancelText="No"
            onConfirm={() => handleDelete(record.id)}
          >
            <Button danger>Delete</Button>
          </Popconfirm>
        </span>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={userdata}
      pagination={{ pageSize: 10 }}
      scroll={{ y: 550 }}
    />
  );
};

export default Comp2;

// onClick={() => handleEdit(record) && onClick={() => handleDelete(record.id)}
