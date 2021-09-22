import Company from '@entities/Company';
import Contact from '@entities/Contact';
import { Request, Response } from 'express';

interface ContactInterface {
    name?: string;
    email?: string;
    phone?: string;
    city?: string;
    state?: string;
    company?: Company; 
}

class ContactController {
    public async findAll(req: Request, res: Response): Promise<Response> {
        try {
            const contacts = await Contact.find({ relations: ['company'] });

            return res.status(200).json(contacts);
        } catch (error) {
            res.status(400).json({ error: 'Find contact failed, try again' });
        }
    }

    public async findById(req: Request, res: Response): Promise<Response> {
        try {
            const id = req.params.id;

            const contact = await Contact.findOne(id, { relations: ['company'] });

            if (!contact) return res.status(400).json({ message: 'Contact does not exist' });

            return res.status(200).json(contact);

        } catch (error) {

            return res.status(400).json({ error: 'Find contact failed, try again' });    
        }
    }

    public async create(req: Request, res: Response): Promise<Response> {
        try {
            const { name, email, phone, city, state, company }: ContactInterface = req.body;

            const findContact = await Contact.findOne({ email })

            if (findContact) return res.status(400).json({ message: 'Contact already exists' });

            const contact = await Contact.create({ name, email, phone, city, state, company }).save();

            if (!contact) return res.status(400).json({ message: 'Cannot create contact' });

            res.status(201).json(contact.id);
        } catch (error) {
            console.error(error)
            return res.status(400).json({ error: 'Create contact failed, try again' })
        }
    }

    public async update(req: Request, res: Response): Promise<Response> {
        try {
            const id = req.params.id;
            const { name, email, phone, city, state, company }: ContactInterface = req.body;

            if (!id) return res.status(400).json({ message: 'Please send contact id' });

            const contact = await Contact.findOne(id);

            if (!contact) return res.status(400).json({ message: 'Cannot find contact' });

            const valuesToUpdate: ContactInterface = {
                name: name || contact.name,
                email: email || contact.email,
                phone: phone || contact.phone,
                city: city || contact.city,
                state: state || contact.state,
                company: company || contact.company,
            };

            await Contact.update(id, { ...valuesToUpdate});

            return res.status(200).json({ message: 'Update successful' });
        } catch (error) {
        return res.status(400).json({ error: 'Update failed, try again' })            
        }
    }

    public async delete(req: Request, res: Response): Promise<Response>{
        try {
            const id = req.params.id;

            if (!id) return res.status(400).json({ message: 'Please send Contact id' });

            const contact = await Contact.findOne(id);

            if (!contact) return res.status(400).json({ message: 'Contact does not exist' });

            await Contact.softRemove(contact);

            return res.status(200).json({ message: 'Contact deleted successfully' });
            
        } catch (error) {
            return res.status(400).json({ error: 'Cannot delete Contact, try again' })
        }
    }
}

export default new ContactController();