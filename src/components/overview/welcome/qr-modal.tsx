import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RootState } from "@/store";
import { QrCode } from "lucide-react";
import QRCode from "react-qr-code";
import { useSelector } from "react-redux";

export default function QRModal() {
  const doctorId = useSelector((state: RootState) => state.auth.doctorId);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
            <QrCode size={24} />
            <span className="ml-2">Connect with patient</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Connect with patient 🙌</DialogTitle>
          <DialogDescription>
            Use this QR code to connect with your patients.
          </DialogDescription>
        </DialogHeader>
        <div className="my-5 flex justify-center items-center">
          <QRCode
            value={`${process.env.NEXT_PUBLIC_PATIENT_FRONTEND_URL}/connect-with-doc?docId=${doctorId}`}
            size={200}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
