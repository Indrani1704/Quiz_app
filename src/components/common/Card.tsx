import { Card as MCard, CardContent } from "@mui/material";
export default function Card({ children }: { children: any }) {
  return (
    <MCard>
      <CardContent>{children}</CardContent>
    </MCard>
  );
}
