import templateList from '@/app/(data)/Template'
import React from 'react'

const TemplateListSection = () => {
  return (
    <div>
        {templateList.map((template,index)=>{
            return (
                <div key={index}>
                    <h1>{template.name}</h1>
                    <p>{template.description}</p>
                  
                </div>

            )
        })}
    </div>
  )
}

export default TemplateListSection