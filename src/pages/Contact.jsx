import React, { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert("Message sent!");
  };

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-6xl font-bold">Contact Us</h2>
      </div>

      <Card className="max-w-xl mx-auto shadow-md border-4">
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name" className="mb-3 text-[20px] font-medium">Name</Label>
              <Input
                className="p-4 focus-visible:ring-6"
                id="name"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="email" className="mb-3 text-[20px] font-medium">Email</Label>
              <Input
                className="p-4 focus-visible:ring-6"
                id="email"
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="message" className="mb-3 text-[20px] font-medium">Message</Label>
              <Textarea
                className="p-4 focus-visible:ring-6"
                id="message"
                name="message"
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <Button type="submit" className="w-full text-2xl p-8">
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}

export default Contact
