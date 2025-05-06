
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

interface LoginPopupProps {
  trigger: React.ReactNode;
}

const LoginPopup: React.FC<LoginPopupProps> = ({ trigger }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Login erfolgreich",
      description: "Du wurdest erfolgreich eingeloggt.",
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Anmelden</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="email">E-Mail</Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="deine@email.de"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Passwort</Label>
            <Input 
              id="password" 
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-between items-center pt-2">
            <Button 
              variant="outline"
              type="button" 
              className="text-sm text-brand-green hover:text-brand-darkgreen hover:bg-transparent"
            >
              Passwort vergessen?
            </Button>
            <Button 
              type="submit" 
              className="bg-brand-green hover:bg-brand-darkgreen"
            >
              Anmelden
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LoginPopup;
