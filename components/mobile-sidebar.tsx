"use client";

import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "@/components/sidebar";

interface MobileSidebarProps {
    apiLimitCount: number;
    isPro: boolean;
}

const MobileSidebar = ({
    apiLimitCount = 0,
    isPro = false,
}:MobileSidebarProps) => {
    
  return (
    <Sheet>
        <Button variant="ghost" size="icon" className="md:hidden" asChild>
        <SheetTrigger>
            <Menu/>
        </SheetTrigger>
        </Button>
        <SheetContent side="left" className="p-0">
            <Sidebar isPro={isPro} apiLimitCount={apiLimitCount} />
        </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;