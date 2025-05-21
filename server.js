import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const app = express();
app.use(cors()); // //  

app.use(express.json());

app.get('/usuarios', async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar usuários' });
  }
});

app.post('/usuarios', async (req, res) => {
  
  try {
    await prisma.user.create({
      data: {
        name: req.body.name,
        email: req.body.email,
        age: req.body.age
      }
    });
    res.status(201).json({ message: 'Usuário criado' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar usuário' });
  }
});

app.put('/usuarios/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const updatedUser = await prisma.user.update({
      where: { id },
      data: {
        name: req.body.name,
        email: req.body.email,
        age: Number(req.body.age)
      }
    });

    res.status(200).json(updatedUser);
  } catch (error) {
    console.error('Erro ao atualizar usuário:', error);
    res.status(500).json({ error: 'Erro ao atualizar usuário' });
  }
});

/*app.delete('/usuarios/:id', async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.user.delete({
      where: { id }
    });

    res.status(200).json({ message: 'Usuário deletado com sucesso.' });
  } catch (error) {
    console.error('Erro ao deletar usuário:', error);

    // Tratamento para ID inválido ou não encontrado
    if (error.code === 'P2025') {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }

    res.status(500).json({ error: 'Erro ao deletar usuário.' });
  }
}); */

app.delete('/usuarios/:id', async (req, res) => {
  const { id } = req.params;

  // Verificação simples de validade do ID (para MongoDB ou ID do tipo string)
  if (!id || typeof id !== 'string' || id.length !== 24) {
    return res.status(400).json({ error: 'ID inválido ou ausente.' });
  }

  try {
    await prisma.user.delete({
      where: { id }
    });

    return res.status(200).json({ message: 'Usuário deletado com sucesso!' });
  } catch (error) {
    console.error('Erro ao deletar usuário:', error);

    if (error.code === 'P2025') {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }

    return res.status(500).json({ error: 'Erro interno ao deletar usuário.' });
  }
});


app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});

// mongodb usuairo : mogel79897
// mongodb senha : ffkjx8kifOvLZ6Rz