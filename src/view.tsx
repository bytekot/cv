import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import ApplicationView from './components/Application';

const container = document.body.appendChild(document.createElement('main'));
createRoot(container).render(<ApplicationView />);
