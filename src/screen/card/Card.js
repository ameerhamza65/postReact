import React from 'react'
import { Card } from 'antd';
import './card.css'
import { Link } from 'react-router-dom';
export default function CardData({title,body,id}) {
  return (
    <div className="site-card-border-less-wrapper">
    <Card key={id} title={title} bordered={false}  extra={<a><Link to={`/detail/${id}`}> More</Link></a>} style={{ width: '90%' }}>
    {body}
    </Card>
  </div>
  )
}
