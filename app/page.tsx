'use client';

import { useState } from 'react';
import { Hero } from "@/components/marketing/hero";
import { FeaturedCard } from "@/components/ui/featured-card";
import { ModuleRow } from "@/components/ui/module-row";
import { OnboardingWizard } from "@/components/onboarding/onboarding-wizard";

export default function Home() {
  const [isWizardOpen, setIsWizardOpen] = useState(false);

  return (
    <>
      <Hero onStartWizard={() => setIsWizardOpen(true)} />

      <main className="mx-auto max-w-[1200px] px-4 pb-20">

        {/* TOP GRID - FEATURED (Pricing & Plans) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          <FeaturedCard
            title="Architect: Multi-Agent Systems"
            description="Production deployment guide + 1-on-1 setup call with Medhi."
            icon="🔴"
            color="pink"
            badge="PREMIUM"
            link="/support"
          />
          <FeaturedCard
            title="Builder: Advanced Automation"
            description="Cron jobs, webhooks, and video walkthroughs."
            icon="🟡"
            color="yellow"
            badge="FEATURED"
            link="/support"
          />
          <FeaturedCard
            title="Operator: The Basics"
            description="7 core modules to get connected to WhatsApp/Telegram."
            icon="🟢"
            color="green"
            badge="PARTNER"
            link="/learn"
          />
          <FeaturedCard
            title="OpenClaw Official"
            description="The gateway software that bridges AI to chat apps."
            icon="🦞"
            color="blue"
            badge="PREMIUM"
            link="/learn"
          />
        </div>

        {/* LIST SECTION - MODULES 1-7 (Launching Now style) */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-1">Learning Modules</h2>
          <p className="text-sm text-gray-500 mb-6">Step-by-step path to running your agent.</p>

          <div className="space-y-0">
            <ModuleRow
              id="01-prerequisites"
              title="1. Before You Start"
              description="VPS, Node.js, and what you actually need."
              icon="📋"
              author="Medhi"
              timeAgo="Start Here"
              votes={982}
              comments={45}
              tags={["Basics", "Prereqs"]}
              isPromoted={true}
            />
            <ModuleRow
              id="02-installation"
              title="2. Installation"
              description="Official installer script or npm install method."
              icon="⚡"
              author="OpenClaw"
              timeAgo="5m read"
              votes={856}
              comments={124}
              tags={["Setup", "CLI"]}
            />
            <ModuleRow
              id="03-wizard"
              title="3. First-Time Setup"
              description="Running the onboarding wizard and authentication."
              icon="🧙"
              author="Medhi"
              timeAgo="10m read"
              votes={743}
              comments={89}
              tags={["Config", "Auth"]}
            />
            <ModuleRow
              id="04-whatsapp"
              title="4. Connect WhatsApp"
              description="QR code linking and access control (Allowlist)."
              icon="💬"
              author="Module"
              timeAgo="15m read"
              votes={1250}
              comments={230}
              tags={["WhatsApp", "Meta"]}
              isPromoted={true}
            />
            <ModuleRow
              id="05-telegram"
              title="5. Connect Telegram"
              description="BotFather setup and group configuration."
              icon="✈️"
              author="Module"
              timeAgo="10m read"
              votes={920}
              comments={156}
              tags={["Telegram", "Bots"]}
            />
            <ModuleRow
              id="06-testing"
              title="6. Testing Your Setup"
              description="Health checks, security audit, and test messages."
              icon="✅"
              author="Medhi"
              timeAgo="5m read"
              votes={560}
              comments={34}
              tags={["Verify", "Health"]}
            />
            <ModuleRow
              id="07-errors"
              title="7. Common Errors"
              description="Troubleshooting permission denied, node versions, and logs."
              icon="🔍"
              author="Support"
              timeAgo="Reference"
              votes={1504}
              comments={25}
              tags={["Fixes", "Debug"]}
            />
          </div>
        </div>

        {/* BOTTOM SECTION - RESOURCES (Latest Winners style) */}
        <div className="mt-16">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Recommended Tools</h2>
          <p className="text-sm text-gray-500 mb-6">Essential services for your agent.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Gold Winner - Anthropic */}
            <div className="bg-[#FFD54F] p-4 rounded-xl border-2 border-black flex flex-col gap-4">
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 bg-white rounded-lg border-2 border-black flex items-center justify-center text-xl shadow-[3px_3px_0px_0px_white]">
                  🧠
                </div>
                <div className="px-2 py-0.5 bg-black text-white text-[10px] font-bold rounded uppercase">
                  BEST FOR CODING
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg">Anthropic Claude</h3>
                <p className="text-xs font-semibold text-black/70">Required for best agent performance.</p>
              </div>
              <div className="mt-auto flex items-center gap-2">
                <span className="text-xs font-bold">$5-15/mo</span>
                <span className="text-[10px] border border-black/20 rounded px-1">CREDITS</span>
              </div>
            </div>

            {/* Silver Winner - DigitalOcean */}
            <div className="bg-gray-200 p-4 rounded-xl border border-gray-300 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-xl">
                  ☁️
                </div>
                <h3 className="font-bold">DigitalOcean</h3>
              </div>
              <p className="text-sm text-gray-600">Reliable VPS hosting for ~$6/month.</p>
            </div>

            {/* Bronze Winner - Node.js */}
            <div className="bg-[#EAD0B2] p-4 rounded-xl border border-[#D4A574] flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-xl">
                  🟢
                </div>
                <h3 className="font-bold">Node.js 22+</h3>
              </div>
              <p className="text-sm text-gray-800">Required runtime environment.</p>
            </div>
          </div>
        </div>

      </main>

      {/* Onboarding Wizard */}
      <OnboardingWizard
        isOpen={isWizardOpen}
        onClose={() => setIsWizardOpen(false)}
      />
    </>
  );
}
